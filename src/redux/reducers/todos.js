
const initialState = ['testing data'];

function todosReducer(state = initialState, action) {
    
    switch(action.type) {
        case 'ADD_TODO':
            let text = action.payload && action.payload.text;
            return state.concat([text])
        default:
            return state;
    }

}

export default todosReducer;