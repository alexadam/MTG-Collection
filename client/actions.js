const actions = {
    ADD_CARD_TO_COLLECTION: 'ADD_CARD_TO_COLLECTION',
    REMOVE_CARD_FROM_COLLECTION: 'REMOVE_CARD_FROM_COLLECTION'
};

const addCardToCollection = (cardData) => ({
    type: actions.ADD_CARD_TO_COLLECTION,
    cardData: cardData
});

const removeCardFromCollection = (cardData) => ({
    type: actions.REMOVE_CARD_FROM_COLLECTION,
    cardData: cardData
});

export {actions, addCardToCollection, removeCardFromCollection};
