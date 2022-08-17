import { Component } from "react";
import { userService } from "../services/userService";
import { bitcoinService } from "../services/bitcoinService";

export class Home extends Component {
    state = {
        user: null,
        bitcoinRate: null
    }

    componentDidMount() {
        const user = userService.getUser()
        this.setState({ user }, () => { this.getBitRate(user.coins) })
    }

    getBitRate = async (coins) => {
        try {
            const data = await bitcoinService.getRate(coins)
            this.setState({ bitcoinRate: data })
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    _formatDate(timestamp) {
        const hour = new Date(timestamp).getHours() + ''
        const min = new Date(timestamp).getMinutes() + ''
        const day = new Date(timestamp).getDate()
        const month = (new Date(timestamp) + '').substring(4, 7)
        return hour.padStart(2, 0) + ':' + min.padStart(2, 0) + ' ,' + day + ' ' + month
    }

    render() {
        if (!this.state.user) return
        const { name, coins } = this.state.user
        let moves = this.state.user.moves.slice(0, 3)
        return (
            <>
                <h1>Hello {name}!</h1>
                <h3>Coins: {coins}</h3>
                <h3>BTC: {this.state.bitcoinRate}</h3>

                {moves.length > 0 &&
                    <section>
                        <ul>
                            {moves.map(({ to, at, amount }) => {
                                return <li className="flex column move-preview" key={at}>
                                    <h4>To : {to}</h4>
                                    <h4>At : {this._formatDate(at)}</h4>
                                    <h4>Amount : {amount} coins</h4>
                                </li>
                            })}
                        </ul>
                    </section>}
            </>
        )
    }
}