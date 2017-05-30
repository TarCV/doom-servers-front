import { call, put } from 'redux-saga/effects';
import { request, tryRegisterSaga, tryLoginSaga } from './sagas';

/* eslint-disable redux-saga/yield-effects */

describe('register sagas', () => {
  it('switch to email verification on backend validation success', () => {
    const iterator = tryRegisterSaga();
    expect(iterator.next().value)
      .toEqual(call(request, '/register', {}));

    const response = {};
    expect(iterator.next(response).value)
      .toEqual(put({ type: 'REGISTER_SUCCESS', payload: {} }));
  });

  it('propagate error on backend validation failure', () => {
    const iterator = tryRegisterSaga();
    iterator.next();  // TODO: verity call()

    const errorData = {
      message: 'validatio failure',
      fields: [],
    };
    const registerResult = iterator.throw(errorData).value;
    expect(registerResult).toEqual(put({ type: 'REGISTER_ERROR', payload: errorData }));
  });
});

describe('login sagas', () => {
  it('switch to email verification on backend validation success', () => {
    const iterator = tryLoginSaga();
    expect(iterator.next().value)
      .toEqual(call(request, '/login', {}));

    const response = {};
    const registerResult = iterator.next(response).value;
    expect(registerResult).toEqual(put({ type: 'LOGIN_SUCCESS', payload: {} }));
  });

  it('propagate error on backend validation failure', () => {
    const iterator = tryLoginSaga();
    iterator.next();  // TODO: verity call()

    const errorData = {
      message: 'login failure',
      fields: [],
    };
    const registerResult = iterator.throw(errorData).value;
    expect(registerResult).toEqual(put({ type: 'LOGIN_ERROR', payload: errorData }));
  });
});
