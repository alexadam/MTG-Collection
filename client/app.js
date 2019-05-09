import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import './style.scss';

// import MainMobile from './main1'


import Modal from 'react-responsive-modal';
import SearchCards from './misc-components/search-cards'
import AllCardsView from './all-cards/all-cards-view'

import MainReducer from './reducer.js';


class Main extends React.Component {
    state = {
        isSearchVisible: false
    }

    toggleSearch = () => {
        this.setState({
            isSearchVisible: !this.state.isSearchVisible
        })
    }

    onCardSelected = (newCard) => {
        console.log("NEW card");
    }

    onAddCard = (cardData) => {

    }

    render = () => {
        return (
            <div className="mtg-main">
                <button onClick={this.toggleSearch}>Search...</button>
                <Modal open={this.state.isSearchVisible} onClose={this.toggleSearch}
                            showCloseIcon={false}
                            classNames={{modal: 'mtg-search-popup-container'}}
                            center>
                    <SearchCards onCardSelected={this.onCardSelected} onAddCard={this.onAddCard} />
                </Modal>
            </div>
        )
    }
}

const store = createStore(MainReducer);



/*

<div className="main-container">
    <div className="title">M:tG Collection Helper</div>
    <Main />
    <div className="tmp-container">
        <div className="tmp-container-row">
            <div className="tmp-menu">
                <button className="tmp-menu-button">Cards</button>
                <button className="tmp-menu-button">Decks</button>
                <button className="tmp-menu-button">Wishlist</button>
                <button className="tmp-menu-button">Stats</button>
                <button className="tmp-menu-button">Search...</button>
            </div>
            <div className="tmp-cards-holder">
                <input type="text" placeholder="Search"/>
                <div className="card">
                    tec
                </div>
                <div className="card">
                    tec 2
                </div>
                <div className="card">
                    tec 3
                </div>
            </div>
        </div>
    </div>
</div>



*/


import CardsListView from './cards/cards-list'

const App = (props) => (

    <Provider store={store}>
        <div className="main-container">
            <div className="title">M:tG Collection Helper</div>
            <div className="tmp-container">
                <div className="tmp-container-row">
                    <div className="tmp-menu">
                        <button className="tmp-menu-button">Cards</button>
                        <button className="tmp-menu-button">Decks</button>
                        <button className="tmp-menu-button">Wishlist</button>
                        <button className="tmp-menu-button">Stats</button>
                        <button className="tmp-menu-button">Research...</button>
                    </div>
                    <div className="mtg-list-container">
                        <AllCardsView />
                    </div>
                    <div className="mtg-info-container">
                        aaa
                    </div>
                </div>
            </div>
        </div>
    </Provider>


);

ReactDOM.render((
    <App/>
), document.getElementById('app'));
