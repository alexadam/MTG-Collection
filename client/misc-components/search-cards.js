import React from 'react'
import Fuse from 'fuse.js'
import Modal from 'react-responsive-modal';
import './search-cards.scss'
import {cardData} from '../../resources/mtg-cards.js'
import MTGManaIcons from './mana-icons'


class SearchFilter extends React.Component {

    state = {
        isFilterOptionsVisible: false,
        filterString: ''
    }

    toggleFilterOptions = () => {
        this.setState({isFilterOptionsVisible: !this.state.isFilterOptionsVisible})
    }

    onFilterInput = (e) => {
        let newVal = e.target.value
        this.setState({filterString: newVal}, ()=>{this.props.onSearchInput(newVal)})
    }

    render = () => {

        let filterOptions = (
            <div className="mtg-search-card-options">
                <input type="radio"/> label 1
                <input type="radio"/> label 1
                <input type="radio"/> label 1
            </div>
        )

        if (!this.state.isFilterOptionsVisible) {
            filterOptions = null
        }

        return (
            <div className="mtg-search-card-filter-container">
                <div className="mtg-search-card-input">
                    <div className="mtg-search-filter-row">
                        <input type="text" value={this.state.filterString} onChange={this.onFilterInput}/>
                        <button onClick={this.toggleFilterOptions}>options</button>
                    </div>
                </div>
                {filterOptions}
            </div>
        )
    }
}

class AddCardOptions extends React.Component {

    render = () => {
        return (
            <div className="mtg-add-card-options">
                Options...
            </div>
        )
    }
}

class CardRulesText extends React.Component {

    render = () => {
        if (!this.props.rulesText) {
            return null
        }

        let textParts = this.props.rulesText.split(/\n/g)
        let elemParts = []

        for (let tPart of textParts) {
            elemParts.push(
                (<div className="mtg-add-card-text-rule-row">
                    <MTGManaIcons inlineText={tPart} />
                </div>)
            )
        }

        return (
            <div className="mtg-add-card-text-rules">
                {elemParts}
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

        let cardPower = null
        if (this.props.card.power || this.props.card.toughness) {
            cardPower = (
                <div className="mtg-card-power mtg-card-row">
                    <div className="mtg-card-power-display">
                        <MTGManaIcons inlineText={this.props.card.power} /> / <MTGManaIcons inlineText={this.props.card.toughness} />
                    </div>
                </div>
            )
        }

        return (
            <div className={"mtg-card mtg-focus-card-view " + bgClass} onClick={this.cardSelected}>
                <div className="mtg-card-header mtg-card-row">
                    <div className="mtg-card-name">
                        {this.props.card.name}
                    </div>
                    <div className="mtg-card-mana">
                        <MTGManaIcons manaString={this.props.card.manaCost} width="15" />
                    </div>
                </div>

                <div className="mtg-card-type mtg-card-row">
                    {this.props.card.type}
                </div>
                <div className="mtg-card-rules mtg-card-row">
                    <CardRulesText rulesText={this.props.card.text} />
                </div>
                {cardPower}

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
        let newVal = e
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
                <SearchFilter onSearchInput={this.onSearchInput}/>
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
