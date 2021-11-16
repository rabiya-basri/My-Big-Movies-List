const moviesInitialState = []
const moviesReducers = (state = moviesInitialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE': {
            return [{ ...action.payload },...state]
        }
        case 'REMOVE_MOVIE': {
            return state.filter((element) => {
                return element.id!==action.payload
            })
        }
        case 'ASCENDING': {
            if (action.payload === 'top') {
                return [...state.sort((a, b) => {
                    return a.ranking - b.ranking
                })]
            
            } else if (action.payload === 'low') {
                return [...state.sort((a, b) => {
                    return b.ranking-a.ranking
                })]
            } else {
                return [...state]
            }
        }
        default: {
            return [...state]
        }
    }
}
export default moviesReducers