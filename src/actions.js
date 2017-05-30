/*
 * action types
 */
export const CHANGE = 'CHANGE';

export const SIGNUP_VERIFICATE = 'SIGNUP_VERIFICATE';
export const REGISTER_MAIL_SENT = 'REGISTER_MAIL_SENT';

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
