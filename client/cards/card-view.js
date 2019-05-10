import React from 'react'
import MTGManaIcons from '../misc-components/mana-icons'
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
            return (
                <div className={"mtg-card mtg-card-compact " + bgClass} onClick={this.cardSelected}>
                    <div className="mtg-card-name">
                        {cardData.name}
                    </div>
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
