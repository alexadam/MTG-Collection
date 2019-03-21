import React from 'react'
import Fuse from 'fuse.js'
import Modal from 'react-responsive-modal';
import './search-cards.scss'
import {cardData} from '../../resources/mtg-cards.js'
import MTGManaIcons from './mana-icons'

class AddCardOptions extends React.Component {

    render = () => {
        return (
            <div className="mtg-add-card-options">
                Options...
            </div>
        )
    }
}

class FocusCardView extends React.Component {

    cardSelected = () => {
        this.props.onCardSelected(this.props.card)
    }


    render = () => {

        let amISelected = false
        if (this.props.selectedCard && this.props.selectedCard.name === this.props.card.name) {
            amISelected = true
        }
        let bgClass = ''
        if (amISelected) {
            bgClass = 'selected-card'
        }

        return (
            <div className={"mtg-focus-card-view " + bgClass} onClick={this.cardSelected}>
                <div>
                    {this.props.card.name}
                </div>
                <MTGManaIcons manaString={this.props.card.manaCost} />
                <div>
                    {this.props.card.type}
                </div>
                <MTGManaIcons inlineText={this.props.card.text} />
            </div>
        )
    }
}

export default class SearchCards extends React.Component {

    searchTimer = null

    state = {
        selectedCard: null,
        searchValue: '',
        searchResult: null,
        isAddOptionsVisible: false
    }

    onSearchInput = (e) => {
        let newVal = e.target.value
        this.setState({
            searchValue: newVal
        }, () => {
            if (this.searchTimer) {
                clearTimeout(this.searchTimer)
            }
            this.searchTimer = setTimeout(this.search, 1000)
        })
    }

    search = () => {

        var options = {
              shouldSort: true,
              threshold: 0.2,
              location: 0,
              distance: 3,
              maxPatternLength: 32,
              minMatchCharLength: 1,
              tokenize:true,
              keys: [
                "name",
                // "text"
              ]
            };

            let fuse = new Fuse(cardData, options); // "list" is the item array
            let result = fuse.search(this.state.searchValue);

            this.setState({
                searchResult: result
            })
    }

    onCardSelected = (cardData) => {
        this.setState({
            selectedCard: cardData
        })
    }

    toggleAddOptions = () => {
        this.setState({
            isAddOptionsVisible: !this.state.isAddOptionsVisible
        })
    }


    render = () => {

        let cardsFound = []
        if (this.state.searchResult) {
            let keyIndex = 0
            for (let card of this.state.searchResult) {
                cardsFound.push(
                    <FocusCardView key={keyIndex++} card={card} onCardSelected={this.onCardSelected} selectedCard={this.state.selectedCard}/>
                )
            }
        }

        return (
            <div className="mtg-search-card-container">
                <div className="mtg-search-card-input">
                    <input type="text" value={this.state.searchValue} onChange={this.onSearchInput}/>
                    <button>options</button>
                </div>
                <div className="mtg-search-card-results">
                    {cardsFound}
                </div>
                <div className="mtg-search-card-menu">
                    <span>Add to:</span>
                    <button onClick={this.toggleAddOptions}>Add...</button>
                    <button>Collection</button>
                    <button>Deck...</button>
                    <button>Wishlist</button>
                </div>
                <Modal open={this.state.isAddOptionsVisible} onClose={this.toggleAddOptions}
                            showCloseIcon={false}
                            classNames={{modal: 'mtg-add-options-popup-container'}}
                            center>
                    <AddCardOptions />
                </Modal>
            </div>
        )
    }

}
