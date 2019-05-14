import React from 'react'
import MTGManaIcons from '../misc-components/mana-icons'
import * as Utils from '../misc-components/utils'

import './card-view-utils.scss'


export class CardInfoTextMana extends React.Component {

    render = () => {

        if (!this.props.content) {
            return null;
        }

        let textParts = this.props.content.split(/\n/g)
        let elemParts = []

        for (let tPart of textParts) {
            elemParts.push(
                (<div className="mtg-add-card-text-rule-row" key={Utils.generateRandomKey()}>
                    <MTGManaIcons inlineText={tPart} />
                </div>)
            )
        }

        return (
            <div className="mtg-card-details-info-container">
                <div className="mtg-card-details-info-label">
                    {this.props.label}
                </div>
                <div className="mtg-card-details-info-object">
                    {elemParts}
                </div>
            </div>
        )
    }
}

export class CardInfoMana extends React.Component {

    render = () => {
        return (
            <div className="mtg-card-details-info-container">
                <div className="mtg-card-details-info-label">
                    {this.props.label}
                </div>
                <div className="mtg-card-details-info-object">
                    <MTGManaIcons manaString={this.props.content} width="15" />
                </div>
            </div>
        )
    }
}

export class CardInfoText extends React.Component {

    render = () => {
        return (
            <div className="mtg-card-details-info-container">
                <div className="mtg-card-details-info-label">
                    {this.props.label}
                </div>
                <div className="mtg-card-details-info-object">
                    {this.props.content}
                </div>
            </div>
        )
    }
}
