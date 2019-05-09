import {actions} from './actions'

const defaultCardData = {
    id: 0,
    type: {
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
    allCards: [

    ],
    decks: [

    ],
    wishlist: [

    ]
}

const MainReducer = (state = defaultData, action) => {

    if (action.type === actions.ADD_CARD_TO_COLLECTION) {
        let tmpData = JSON.parse(JSON.stringify(state))
        let tmpCard = JSON.parse(JSON.stringify(defaultCardData))
        tmpCard.type = action.cardData
        tmpData.allCards.push(tmpCard)
        console.log('tmpData', tmpData);
        return tmpData
    }
    if (action.type === actions.REMOVE_CARD_FROM_COLLECTION) {

    }

    return state
}

export default MainReducer
