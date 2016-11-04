/*
 * action types
 */
export const CHANGE = 'CHANGE'

/*
 * action creators
 */
export function changeSetting(block, name, newValue) {
    return {
        type: CHANGE,
        block: block,
        name: name,
        newValue: newValue
    }
}

//export const boundChangeSetting = (block, name, newValue) => dispatch(changeSetting(block, name, newValue))