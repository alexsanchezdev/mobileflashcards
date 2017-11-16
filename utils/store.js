import { AsyncStorage, Alert } from 'react-native'
const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export async function saveDeckTitle(deckTitle) {
    console.log('Called add decks')
    try {
        await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [deckTitle]: {
                title: deckTitle,
                questions: []
            }
        })).then(() => {
            Alert.alert('Completed', 'Deck was correctly saved.')
        })
    } catch (error) {
        console.log(error)
        Alert.alert('Error', 'There was an error saving your deck.')
    }
}

export async function getDecks() {
    try {
        const value = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
        if (value !== null){
          // We have data!!
          const json = JSON.parse(value)
          console.log(json)
        }
      } catch (error) {
        return console.log(error)
      }
}