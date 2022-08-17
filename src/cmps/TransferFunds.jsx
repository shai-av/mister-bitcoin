import { Component } from "react";

export class TransferFunds extends Component {
    state = {
        funds: 0
    }

    onChange = ({ target: { value } }) => {
        this.setState({ funds: +value })
    }

    onTransfer = () => {
        this.props.TransferFunds(this.state.funds)
    }
    render() {
        return (
            <>
                {this.props.loggedinUser.coins > 0 ?
                    <section>
                        <h3>Transfer funds to {this.props.contactName}</h3>
                        <input type="range" onChange={this.onChange} title={this.state.funds} name="funds" value={this.state.funds} min="0" max={this.props.loggedinUser.coins} />
                        <span>{this.state.funds}</span>
                        <p>
                            <button onClick={this.onTransfer}>Transfer</button>
                        </p>
                    </section>
                    : <div>
                        No funds
                    </div>}
                <br />
            </>
        )
    }
}