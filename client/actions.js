const actions = {
    ADD_CARD: 'ADD_CARD',
    REMOVE_CARDS: 'REMOVE_CARD'
};

const addCard = (cardData) => ({
    type: actions.ADD_CARD,
    cardData: cardData
});

const removeCard = (cardData) => ({
    type: actions.REMOVE_CARD,
    cardData: cardData
});

export {actions, addCard, removeCard};
