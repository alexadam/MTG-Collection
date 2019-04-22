import React from 'react'

// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import CardView from './card-view'


// import {add, remove} from '../actions/actions.js'



class CardsListView extends React.Component {

    render = () => {

        let allCardsComponents = []
        let index = 0
        for (let card of this.props.allCards) {
            allCardsComponents.push(<CardView card={card.type} key={index++}/>)
        }

        return (
            <div className="mtg-cards-view">
                {allCardsComponents}
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
export default connect(mapStateToProps)(CardsListView);
