import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'

import './style.scss';

// import MainMobile from './main1'


import Modal from 'react-responsive-modal';
import SearchCards from './misc-components/search-cards'

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

    render = () => {
        return (
            <div className="mtg-main">
                <button onClick={this.toggleSearch}>Search...</button>
                <Modal open={this.state.isSearchVisible} onClose={this.toggleSearch}
                            showCloseIcon={false}
                            classNames={{modal: 'mtg-search-popup-container'}}
                            center>
                    <SearchCards />
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


const App = (props) => (

    <Provider store={store}>
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
    </Provider>


);

ReactDOM.render((
    <App/>
), document.getElementById('app'));
