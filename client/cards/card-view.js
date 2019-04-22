import React from 'react'
import MTGManaIcons from '../misc-components/mana-icons'


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
