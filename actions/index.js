export const ADD_DECK = 'ADD_DECK'
export const RETRIEVE_DECKS = 'RETRIEVE_DECKS'
export const ADD_CARD = 'ADD_CARD'

export const addDeck = (title) => {
    return {
        type: ADD_DECK,
        title
    }
}

export const retrieveDecks = (decks) => {
    return {
        type: RETRIEVE_DECKS,
        decks
    }
}

export const saveCard = (deckTitle, card) => {
    return {
        type: ADD_CARD,
        deckTitle, card
    }
}