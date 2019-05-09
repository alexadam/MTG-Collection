import React from 'react'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CardView from '../cards/card-view'
import CardsListView from '../cards/cards-list'
import './all-cards-view.scss'

import Modal from 'react-responsive-modal';
import SearchCards from '../misc-components/search-cards'

// import {add, remove} from '../actions/actions.js'

class AllCardsView extends React.Component {

    state = {
        selectedCard: null,
        isSearchVisible: false
    }

    toggleSearch = () => {
        this.setState({
            isSearchVisible: !this.state.isSearchVisible
        })
    }

    onCardSelected = (selectedCard) => {
        this.setState({
            selectedCard: selectedCard
        }, () => {

        })
    }

    render = () => {
        let cards = []
        let index = 0

        for (let card of this.props.allCards) {
            cards.push(card.type)
        }

        return (
            <div className="mtg-all-cards-view">
                <div className="mtg-acv-header">
                    <input className="mtg-acv-filter" type="text" placeholder="Filter by Card's Name"/>
                </div>
                <div className="mtg-acv-cards">
                    <CardsListView allCards={cards} compactView={true} onCardSelected={this.onCardSelected} />
                </div>
                <div className="mtg-acv-footer">
                    <button className="mtg-acv-add-card" onClick={this.toggleSearch}>Add Card...</button>
                </div>
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



const mapStateToProps = (state) => ({ allCards: state.allCards })

// const mapDispatchToProps = (dispatch) => ({
//     add: bindActionCreators(add, dispatch),
//     remove: bindActionCreators(remove, dispatch)
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Edit);
export default connect(mapStateToProps)(AllCardsView);
