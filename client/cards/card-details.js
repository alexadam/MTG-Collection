import React from 'react'
import * as Utils from '../misc-components/utils'
import {CardInfoMana, CardInfoText, CardInfoTextMana} from './card-view-utils'

import './card-details.scss'



class CardInfoContainer extends React.Component {

    render = () => {
        return (
            <div className="mtg-card-details-info-container">
                <div className="mtg-card-details-info-label">
                    {this.props.label}
                </div>
                <div className="mtg-card-details-info-object">

                </div>
            </div>
        )
    }
}

class CardDetailsSection extends React.Component {
    render = () => {
        return (
            <div className="mtg-card-details-section">
                <div className="mtg-card-details-section-title">
                    {this.props.title}
                </div>
                <div className="mtg-card-details-section-container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}


class CardInfo extends React.Component {

    render = () => {
        return (
            <CardDetailsSection title="Card Info">
                <CardInfoText label="Card's Name" content={this.props.cardData.mtgData.name} />
                <CardInfoMana label="Mana Cost" content={this.props.cardData.mtgData.manaCost} />
                <CardInfoText label="Type" content={this.props.cardData.mtgData.type} />
                <CardInfoTextMana label="Text" content={this.props.cardData.mtgData.text} />
                <CardInfoText label="Power / Toughness" content={this.props.cardData.mtgData.power + ' / ' + this.props.cardData.mtgData.toughness} />
            </CardDetailsSection>
        )
    }
}




export default class CardDetails extends React.Component {

    render = () => {

        if (!this.props.cardData) {
            return (
                <div className="mtg-card-details">
                </div>
            )
        }
        return (
            <div className="mtg-card-details">
                <CardInfo cardData={this.props.cardData} />
                <CardDetailsSection title="Stock" />
                <CardDetailsSection title="Where is it?" />
                <CardDetailsSection title="Notes" />
                <CardDetailsSection title="Links" />
            </div>
        )
    }
}
