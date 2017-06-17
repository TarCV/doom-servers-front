import { call, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import FetchPonyfill from 'fetch-ponyfill';
const { fetch, Request, Response, Headers } = FetchPonyfill();

// TODO: move to utils
function* takeFirst(pattern, saga, ...args) {
  const task = yield fork(function* taker () {
    for (;;) {
      const action = yield take(pattern);
      yield call(saga, ...args.concat(action));
    }
  });
  return task;
}

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function requestRaw(endpoint, options) {
  return fetch(`http://localhost:8000${endpoint}`, options)
    .then(checkStatus)
    .then(parseJSON);
}

export function request(endpoint, method, body) {
  if (method !== 'POST' && body !== undefined) {
    throw new Error('Only POST requests can have body');
  }
  return requestRaw(endpoint, {
    method,
    headers: new Headers({
      'content-type': 'application/json; charset=utf-8',
      Accept: 'application/json',
    }),
    body: typeof body === 'object' ? JSON.stringify(body) : body,
  });
}

function* registerVerifySaga() {
  while (true) {  // TODO: use takeEvery to not block new requests during executed workflow
    const changeAction = yield take('REGISTER_CHANGE_MAIL');
    try {
      yield call(request, '/register/mail', 'POST', changeAction.payload);
      yield put({ type: 'REGISTER_MAIL_SENT', payload: { mailChanged: true } });
    } catch (e) {
      yield put({ type: 'REGISTER_CHANGEMAIL_ERROR', payload: e });
    }
  }
}

function* registerSaga() {
  while (true) {// TODO: use takeEvery to not block new requests during executed workflow
    const action = yield take('REGISTER_ATTEMPT');
    try {
      const signupResult = yield call(request, '/register', 'POST', action.payload);
      if (!signupResult.token) {
        // Not got e-mail change token, bad
        // TODO: notify server of the problem
        // TODO: to prevent losing name on registration failure allow
        //  registering same name-mail pair again until it is activated
        throw new Error({ _global: 'Error sending a verification e-mail' });
      }
      yield put({ type: 'REGISTER_MAIL_SENT', payload: {
        token: signupResult.token,
        mail: signupResult.mail
      }});
      yield* registerVerifySaga();
    } catch (e) {
      console.error(e);
      yield put({ type: 'REGISTER_ERROR', payload: e });
    }
  }
}

function createRequestSaga(endpoint, method, actionPrefix) {
  return function* requestSaga(action) {
    try {
      const result = yield call(request, endpoint, method, action.payload);
      yield put({ type: `${actionPrefix}_SUCCESS`, payload: result });
    } catch (e) {
      yield put({ type: `${actionPrefix}_ERROR`, payload: e });
    }
  };
}

function* loginSaga() {
  while (true) {// TODO: use takeEvery to not block new requests during executed workflow
    const action = yield take('LOGIN_ATTEMPT');
    try {
      const loginResult = yield call(request, '/login', 'POST', action.payload);
      yield put({ type: 'LOGIN_SUCCESS', payload: {
        login: loginResult.login,
        token: loginResult.token,
      }});
      yield put({ type: 'LOCATION_REDIRECT', payload: {
        location: '/'
      }})
    } catch (e) {
      console.error(e);
      yield put({ type: 'LOGIN_ERROR', payload: e });
    }
  }
}

function* logoutSaga() {
  yield takeLatest('LOGOUT_ATTEMPT', function *logoutDo(action) {
    try {
      const logoutResult = yield call(request, '/logout', 'POST', action.payload);
      yield put({ type: 'LOGOUT_SUCCESS', payload: { login: logoutResult.login }});
    } catch (e) {
      console.error(e);
      yield put({ type: 'LOGOUT_ERROR', payload: e });
    }
  })
}

export default function* rootSaga() {
  yield [
    registerSaga(),
    loginSaga(),
    logoutSaga()
  ];
}
