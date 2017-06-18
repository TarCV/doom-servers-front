/*
 * action types
 */
export const CHANGE = 'CHANGE';

export const SIGNUP_VERIFICATE = 'SIGNUP_VERIFICATE';
export const REGISTER_MAIL_SENT = 'REGISTER_MAIL_SENT';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';
export const LOCATION_REDIRECT = 'LOCATION_REDIRECT';
export const REGISTER_ERROR = 'REGISTER_ERROR';
export const REGISTER_CHANGEMAIL_ERROR = 'REGISTER_CHANGEMAIL_ERROR';

/*
 * action creators
 */
export function changeSetting(block, name, newValue) {
  // TODO: use `payload`` field
  return {
    type: CHANGE,
    block,
    name,
    newValue,
  }
}

//export const boundChangeSetting = (block, name, newValue) => dispatch(changeSetting(block, name, newValue))
