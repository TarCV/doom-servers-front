import { combineReducers } from 'redux'
import { CHANGE } from './actions.js'

function initialSettings(state = {}, action) {
  switch (action.type) {
    case CHANGE:
      if (state[action.block]) {
        let block = {};
        block[action.block] = state[action.block].map((setting) => {
          if (setting.name === action.name) {
            // TODO: implement value validation
            return Object.assign({}, setting, {value: action.newValue})
          } else {
            return setting
          }
        })
        return Object.assign({}, state, block)
      } else {
        return state
      }
    default:
      return state
  }
}
const server = combineReducers({
  initialSettings
})
export const appReducer = combineReducers({
  server
})
