import { AsyncStorage } from 'react-native'
const DECKS_STORAGE_KEY = 'MobileFlashcards:decks'

export async function addDeck(title) {
    try {
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({
            [title]: {
                title: title,
                questions: []
            }
        }));
    } catch (error) {
        console.log(error)
    }
}



export async function getDecks() {
    try {
        const value = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
        if (value !== null){
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        console.log(error)
      }
}