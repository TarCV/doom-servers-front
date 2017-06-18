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
        token: action.payload.token
      });
      case a.REGISTER_ERROR:
      case a.REGISTER_CHANGEMAIL_ERROR:
        return Object.assign({}, state, {
          error: action.payload
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
        loginError: undefined
      });
    case a.LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.payload
      });
    case a.LOGOUT_ERROR:
    return Object.assign({}, state, {
      logoutError: action.payload
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
        redirectTo: action.payload.location
      }
    default:
      return state;
  }
}

const server = combineReducers({
  initialSettings,
});
export const appReducer = combineReducers({
  server,
  registration,
  authentication,
  location,
});
