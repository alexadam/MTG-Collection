import React from 'react'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CardView from '../cards/card-view'
import CardsListView from '../cards/cards-list'
import CardDetails from '../cards/card-details'
import './all-cards-view.scss'

import Modal from 'react-responsive-modal';
import SearchCards from '../search-cards/search-cards'

// import {add, remove} from '../actions/actions.js'

class AllCardsView extends React.Component {

    state = {
        selectedCard: null,
        isSearchVisible: false,
        filterText: ''
    }

    onFilter = (e) => {
        let newValue = e.target.value
        this.setState({
            filterText: newValue
        })
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

        let filterRegex = null
        if (this.state.filterText.length > 0) {
            filterRegex = new RegExp('.*' + this.state.filterText + '.*', 'i')
        }

        for (let card of this.props.myCards) {
            if (filterRegex ) {
                if (filterRegex.test(card.type.name)) {
                    cards.push(card)
                }
            } else {
                cards.push(card)
            }
        }

        return (
            <div className="mtg-cards-view-container">
                <div className="mtg-list-container">
                    <div className="mtg-all-cards-view">
                        <div className="mtg-acv-header">
                            <input className="mtg-acv-filter" type="text" placeholder="Filter by Card's Name" value={this.state.filterText} onChange={this.onFilter}/>
                        </div>
                        <div className="mtg-acv-cards">
                            <CardsListView allCards={cards} compactView={true} onCardSelected={this.onCardSelected} selectedCard={this.state.selectedCard}/>
                        </div>
                        <div className="mtg-acv-footer">
                            <button className="mtg-acv-add-card" onClick={this.toggleSearch}>Add Card...</button>
                        </div>
                        <Modal open={this.state.isSearchVisible} onClose={this.toggleSearch}
                                    showCloseIcon={false}
                                    classNames={{modal: 'mtg-search-popup-container'}}
                                    center>
                            <SearchCards onCardSelected={()=>{}} />
                        </Modal>
                    </div>
                </div>
                <div className="mtg-info-container">
                    <CardDetails cardData={this.state.selectedCard} />
                </div>
            </div>
        )
    }
}



const mapStateToProps = (state) => ({ myCards: state.myCards })

// const mapDispatchToProps = (dispatch) => ({
//     add: bindActionCreators(add, dispatch),
//     remove: bindActionCreators(remove, dispatch)
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Edit);
export default connect(mapStateToProps)(AllCardsView);
