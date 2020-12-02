import ACTION_TYPES from '../constants/actions'

export function addToDo(text) {
    return {
        type: ACTION_TYPES.ADD_TODO,
        payload: {
            text: text
        }
    }
}


export default {
    addToDo
}