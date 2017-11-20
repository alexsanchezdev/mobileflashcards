import { AsyncStorage, Alert } from 'react-native'
const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export function saveDeckTitle(deckTitle) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deckTitle]: {
            title: deckTitle,
            questions: []
        }
    }))
}

export function getDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            return data
        })  
}

export function getDeck(title) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            return data[title]
        })
}

export function addCardToDeck(deckTitle, card) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            const deck = (data[deckTitle])
            if (deck) {
                deck.questions.push({question: card.question, answer: card.answer})
                return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
                    [deckTitle]: { ...deck }
                }))
            }
            
        })
}