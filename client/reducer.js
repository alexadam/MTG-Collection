import {actions} from './actions'
import {cardData} from '../resources/mtg-cards.js'

const defaultCardData = {
    id: 0,
    mtgData: {
        //mtg data
    },
    cardInfo: {
        tags: [],
        notes: ''
    },
    nrCopies: 0,
    inDecksPhysical: [],
    inDecksPlaceholder: []
}

const deckData = {
    id: 0,
    deckType: '', // commander
    deckInfo: {
        name: '',
        tags: [],
        notes: ''
    },
    cards: [
        {
            cardId: '',
            isPhysical: false, //true, false -> placeholder
            nrCopies: 0
        }
    ]
}

const defaultData = {
    cardsDB: cardData,
    myCards: [

    ],
    decks: [

    ],
    wishlist: [

    ]
}

const MainReducer = (state = defaultData, action) => {

    if (action.type === actions.ADD_CARD_TO_COLLECTION) {
        let tmpCard = JSON.parse(JSON.stringify(defaultCardData))
        tmpCard.mtgData = action.cardData
        let tmpAllCards = JSON.parse(JSON.stringify(state.myCards))
        tmpAllCards.push(tmpCard)
        return {...state, myCards: tmpAllCards}
    }
    if (action.type === actions.REMOVE_CARD_FROM_COLLECTION) {

    }

    return state
}

export default MainReducer
