const IntialState={likes:0,dislikes:0}

const reducer = (state, action) => {
    if (action.type === 'LIKE') {
        return {
            ...state,
            likes: state.likes + 1
        }
    } else if (action.type === 'DISLIKE') {
        return {
            ...state,
            dislikes: state.dislikes + 1
        }
    }
    return state; // Return the current state for any other action
}

export {reducer,IntialState}