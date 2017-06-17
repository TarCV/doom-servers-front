import { combineReducers } from 'redux';
import {
  CHANGE,
  REGISTER_MAIL_SENT,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOCATION_REDIRECT
} from './actions';

function initialSettings(state = {}, action) {
  switch (action.type) {
    case CHANGE:
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
    case REGISTER_MAIL_SENT:
      return Object.assign({}, state, {
        mailSent: action.payload.mail,
        token: action.payload.token
      });
    default:
      return state;
  }
}

function authentication(state = {}, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        name: action.payload.login,
        token: action.payload.token
      });
    case LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
}

function location(state = {}, action) {
  switch (action.type) {
    case LOCATION_REDIRECT:
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
