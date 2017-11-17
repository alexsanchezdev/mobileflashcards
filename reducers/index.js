import { ADD_DECK, RETRIEVE_DECKS } from '../actions'

function decks (state = {}, action) {
    const { title, decks } = action

    switch(action.type) {
        case ADD_DECK:
            return {
                ...state,
                [title]: {
                    title: title,
                    questions: []
                }
            }
        case RETRIEVE_DECKS:
            return decks
        default:
            return state
    }
}

export default decks