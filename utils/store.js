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