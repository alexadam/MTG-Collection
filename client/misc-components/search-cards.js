import React from 'react'
import Fuse from 'fuse.js'
import Modal from 'react-responsive-modal';
import './search-cards.scss'
import {cardData} from '../../resources/mtg-cards.js'
import MTGManaIcons from './mana-icons'
import CardView from '../cards/card-view'
import CardsListView from '../cards/cards-list'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {addCardToCollection} from '../actions.js'


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

class SearchCards extends React.Component {

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
        }, () => {
            this.props.onCardSelected(cardData)
        })
    }

    toggleAddOptions = () => {
        // this.setState({
        //     isAddOptionsVisible: !this.state.isAddOptionsVisible
        // }, () => {
        //     this.props.addCardToCollection(this.state.selectedCard)
        // })

        this.props.addCardToCollection(this.state.selectedCard)
    }


    render = () => {

        let cardsFound = []
        if (this.state.searchResult) {
            let keyIndex = 0
            for (let card of this.state.searchResult) {
                // cardsFound.push(
                //     <CardView key={keyIndex++} card={card} onCardSelected={this.onCardSelected} selectedCard={this.state.selectedCard} compactView={true}/>
                // )
                cardsFound.push(card)
            }
        }

        return (
            <div className="mtg-search-card-container">
                <SearchFilter onSearchInput={this.onSearchInput}/>
                <div className="mtg-search-card-results">
                    <CardsListView allCards={cardsFound} onCardSelected={this.onCardSelected} compactView={true} />
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



const mapStateToProps = (state) => ({ allCards: state.allCards })

const mapDispatchToProps = (dispatch) => ({
    addCardToCollection: bindActionCreators(addCardToCollection, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCards);
