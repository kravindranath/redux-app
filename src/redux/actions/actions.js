import ACTION_TYPES from '../constants/actions'

function addToDo(text) {
    return {
        type: ACTION_TYPES.ADD_TODO,
        payload: text
    }
}


export default {
    addToDo
}