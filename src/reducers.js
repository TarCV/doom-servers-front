import { combineReducers } from 'redux';
import { CHANGE, REGISTER_MAIL_SENT } from './actions';

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

const server = combineReducers({
  initialSettings,
});
export const appReducer = combineReducers({
  server,
  registration,
});
