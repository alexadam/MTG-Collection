import React from 'react'
import './card-details.scss'

class CardInfoTextMana extends React.Component {

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

class CardInfoMana extends React.Component {

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

class CardInfoText extends React.Component {

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




/*





*/



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
                <CardDetailsSection title="Where is it?" />
                <CardDetailsSection title="Notes" />
                <CardDetailsSection title="Links" />
            </div>
        )
    }
}
