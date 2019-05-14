import React from 'react'
import Fuse from 'fuse.js'
import Modal from 'react-responsive-modal';
import './search-cards.scss'
import CardView from '../cards/card-view'
import CardsListView from '../cards/cards-list'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {addCardToCollection} from '../actions.js'


class SearchFilter extends React.Component {

    state = {
        isFilterOptionsVisible: false,
        filterString: '',
        filterBy: 'mtg-card-name'
    }

    toggleFilterOptions = () => {
        this.setState({isFilterOptionsVisible: !this.state.isFilterOptionsVisible})
    }

    onFilterInput = (e) => {
        let newVal = e.target.value
        this.setState({filterString: newVal}, ()=>{this.props.onSearchInput(newVal)})
    }

    onNewFilterType = (e) => {
        let newFilter = e.target.value
        this.setState({
            filterBy: newFilter
        }, () => {
            this.props.onNewFilterType(newFilter)
        })
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
                <div className="mtg-filter-group">
                    <div className="mtg-filter-input">
                        <input type="text" className="mtg-filter-string"
                            value={this.state.filterString}
                            onChange={this.onFilterInput}
                            placeholder="Filter Cards"
                            />
                    </div>
                    <div className="mtg-filter-menu">
                        <span className="mtg-filter-label">Filter by:</span>
                        <select className="mtg-filter-options" onChange={this.onNewFilterType} value={this.state.filterBy}>
                            <option value="mtg-card-name">MTG - Card Name</option>
                            <option value="mtg-card-type">MTG - Card Type</option>
                            <option value="mtg-card-text">MTG - Card Text</option>
                        </select>
                    </div>
                </div>

                {filterOptions}
            </div>
        )
    }
}

/*
<div className="mtg-search-card-input">
    <div className="mtg-search-filter-row">
        <input type="text" className="mtg-search-filter-string"
                        value={this.state.filterString}
                        onChange={this.onFilterInput}
                        placeholder="Filter Cards"
                        />
        <button onClick={this.toggleFilterOptions}>options</button>
    </div>
</div>

*/

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
        isAddOptionsVisible: false,
        filterBy: 'mtg-card-name'
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

    onNewFilterType = (newFilter) => {
        this.setState({
            filterBy: newFilter
        }, () => {
            this.search()
        })
    }

    search = () => {

        let filterConstants = {
            'mtg-card-name': 'name',
            'mtg-card-type': 'type',
            'mtg-card-text': 'text',
        }

        let filterKeys = ['name']
        if (this.state.filterBy === 'mtg-card-name') {
            filterKeys = ['name']
        } else if (this.state.filterBy === 'mtg-card-type') {
            filterKeys = ['type']
        } else if (this.state.filterBy === 'mtg-card-text') {
            filterKeys = ['text']
        }

        let options = {
              shouldSort: true,
              threshold: 0.2,
              location: 0,
              distance: 3,
              maxPatternLength: 32,
              minMatchCharLength: 1,
              tokenize:true,
              keys: filterKeys
            };

            let fuse = new Fuse(this.props.cardsDB, options); // "list" is the item array
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
                <SearchFilter onSearchInput={this.onSearchInput} onNewFilterType={this.onNewFilterType}/>
                <div className="mtg-search-card-results">
                    <CardsListView allCards={cardsFound} onCardSelected={this.onCardSelected} compactView={true} displayExpand={true} />
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



const mapStateToProps = (state) => ({ cardsDB: state.cardsDB })

const mapDispatchToProps = (dispatch) => ({
    addCardToCollection: bindActionCreators(addCardToCollection, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchCards);
