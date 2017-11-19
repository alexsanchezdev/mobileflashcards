import { ADD_DECK, RETRIEVE_DECKS, ADD_CARD } from '../actions'

function decks (state = {}, action) {

    const { title, deckTitle, card } = action

    switch(action.type) {
        case ADD_DECK:
            return {
                ...state,
                [title]: {
                    title: title,
                    questions: []
                }
            }
        case ADD_CARD:
            return {
                ...state,
                [deckTitle]: {
                    ...state[deckTitle],
                    questions: [
                        ...state[deckTitle].questions,
                        card
                    ]
                }
            }
        case RETRIEVE_DECKS:
            return action.decks
        default:
            return state
    }
}

export default decks