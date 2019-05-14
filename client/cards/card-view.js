import React from 'react'
import MTGManaIcons from '../misc-components/mana-icons'
import {CardInfoMana, CardInfoText, CardInfoTextMana} from './card-view-utils'

import './card-view.scss'


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

export default class CardView extends React.Component {

    cardSelected = () => {
        this.props.onCardSelected(this.props.card)
    }

    state = {
        isExpanded: false
    }

    toggleCardInfoExpand = () => {
        this.setState({isExpanded: !this.state.isExpanded})
    }


    render = () => {

        if (!this.props.card) {
            return null
        }

        let cardData = this.props.card
        if (this.props.card.mtgData) {
            cardData = this.props.card.mtgData
        }

        let amISelected = false
        if (this.props.selectedCard &&
                (
                    (this.props.selectedCard.mtgData && this.props.selectedCard.mtgData.name === cardData.name)
                ||
                    (this.props.selectedCard.name === cardData.name)
                )
            ) {
            amISelected = true
        }

        let bgClass = ''
        if (amISelected) {
            bgClass = 'mtg-selected-card'
        }

        if (this.props.compactView) {
            let expandComponent = null
            let cardDetails = null

            if (this.props.displayExpand) {
                let textContent = '+'
                if (this.state.isExpanded) {
                    textContent = '-'

                    cardDetails = (
                        <div className="mtg-card-compact-details">
                            <CardInfoMana label="Mana Cost" content={cardData.manaCost} />
                            <CardInfoText label="Type" content={cardData.type} />
                            <CardInfoTextMana label="Text" content={cardData.text} />
                            <CardInfoText label="Power / Toughness" content={cardData.power + ' / ' + cardData.toughness} />
                        </div>
                    )
                }
                expandComponent = <button className="mtg-card-expand-button" onClick={this.toggleCardInfoExpand}>{textContent}</button>
            }

            return (
                <div className={"mtg-card mtg-card-compact " + bgClass} >
                    <div className="mtg-card-compact-header">
                        <div className="mtg-card-name" onClick={this.cardSelected}>
                            {cardData.name}
                        </div>
                        {expandComponent}
                    </div>
                    {cardDetails}
                </div>
            )
        }

        let cardPower = null
        if (cardData.power || cardData.toughness) {
            cardPower = (
                <div className="mtg-card-power mtg-card-row">
                    <div className="mtg-card-power-display">
                        <MTGManaIcons inlineText={cardData.power} /> / <MTGManaIcons inlineText={cardData.toughness} />
                    </div>
                </div>
            )
        }

        return (
            <div className={"mtg-card " + bgClass} onClick={this.cardSelected}>
                <div className="mtg-card-header mtg-card-row">
                    <div className="mtg-card-name">
                        {cardData.name}
                    </div>
                    <div className="mtg-card-mana">
                        <MTGManaIcons manaString={cardData.manaCost} width="15" />
                    </div>
                </div>

                <div className="mtg-card-type mtg-card-row">
                    {cardData.type}
                </div>
                <div className="mtg-card-rules mtg-card-row">
                    <CardRulesText rulesText={cardData.text} />
                </div>
                {cardPower}

            </div>
        )
    }
}
