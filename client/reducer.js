import {actions} from './actions'

const cardData = {
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
        {

        }
    ],
    decks: [

    ],
    wishlist: [

    ]
}

const MainReducer = (state = defaultData, action) => {
    return state
}

export default MainReducer
