import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';


import Modal from 'react-responsive-modal';
import SearchCards from './misc-components/search-cards'

class SearchB extends React.Component {


    render = () => {
        return (
            <button onClick={this.search}>Search</button>
        )
    }
}

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


const App = (props) => (
    <div>
        <SearchB />
        <Main />
    </div>
);

ReactDOM.render((
    <App/>
), document.getElementById('app'));
