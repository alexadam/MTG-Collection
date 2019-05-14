import React from 'react'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CardView from './card-view'
import './cards-list.scss'

// import {add, remove} from '../actions/actions.js'

export default class CardsListView extends React.Component {

    state = {
        selectedCard: null
    }

    onCardSelected = (selectedCard) => {
        this.setState({
            selectedCard: selectedCard
        }, () => {
            this.props.onCardSelected(selectedCard)
        })
    }

    render = () => {
        let allCardsComponents = []
        let index = 0

        for (let card of this.props.allCards) {
            allCardsComponents.push(<CardView onCardSelected={this.onCardSelected}
                                                card={card}
                                                selectedCard={this.state.selectedCard}
                                                compactView={this.props.compactView}
                                                displayExpand={this.props.displayExpand}
                                                key={index++}/>)
        }

        return (
            <div className="mtg-cards-view">
                {allCardsComponents}
            </div>
        )
    }
}



// const mapStateToProps = (state) => ({ allCards: state.allCards })
//
// // const mapDispatchToProps = (dispatch) => ({
// //     add: bindActionCreators(add, dispatch),
// //     remove: bindActionCreators(remove, dispatch)
// // })
//
// // export default connect(mapStateToProps, mapDispatchToProps)(Edit);
// export default connect(mapStateToProps)(CardsListView);
