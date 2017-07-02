import { combineReducers } from 'redux';
import * as a from './actions';

function initialSettings(state = {}, action) {
  switch (action.type) {
    case a.CHANGE:
      if (state[action.block]) {
        const block = {};
        block[action.block] = state[action.block].map((setting) => {
          if (setting.name === action.name) {
            // TODO: implement value validation
            return Object.assign({}, setting, { value: action.newValue });
          }
          return setting;
        });
        return Object.assign({}, state, block);
      }
      return state;
    default:
      return state;
  }
}

function registration(state = {}, action) {
  switch (action.type) {
    case a.REGISTER_MAIL_SENT:
      return Object.assign({}, state, {
        mailSent: action.payload.mail,
        token: action.payload.token,
      });
    case a.REGISTER_ERROR:
    case a.REGISTER_CHANGEMAIL_ERROR:
      return Object.assign({}, state, {
        error: action.payload,
      });
    default:
      return state;
  }
}

function authentication(state = {}, action) {
  switch (action.type) {
    case a.LOGIN_SUCCESS:
      return Object.assign({}, state, {
        name: action.payload.login,
        token: action.payload.token,
        loginError: undefined,
      });
    case a.LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.payload,
      });
    case a.LOGOUT_ERROR:
      return Object.assign({}, state, {
        logoutError: action.payload,
      });
    case a.LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}

function location(state = {}, action) {
  switch (action.type) {
    case a.LOCATION_REDIRECT:
      return {
        redirectTo: action.payload.location,
      };
    default:
      return state;
  }
}

const initialServerListState = {
  servers: [
    {
      id: 'someid',
      address: '195.100.10.1:10666',
      name: ']ASTS[ #1',
      type: 'duel',
      iwad: 'doom2',
      iwadAlternatives: ['freedm2'],
      pwads: [
        { original: 'astsmc2', alternatives: [] },
      ],
      map: {
        id: 'd5m01',
        name: 'Dwango5 map01',
      },
      players: {
        maxToJoin: 2,
        maxTotal: 8,
        joined: [{ name: 'Bazooka', authenticated: true }],
        spectates: [{ name: 'BrutalPlayer' }],
      },
      progress: {
        time: { current: 0, limit: 30 },
        frags: { current: 0, limit: 30 },
      },
    },
  ],
};

const server = combineReducers({
  initialSettings,
});

function serverList(state = initialServerListState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const appReducer = combineReducers({
  server,
  serverList,
  registration,
  authentication,
  location,
});
