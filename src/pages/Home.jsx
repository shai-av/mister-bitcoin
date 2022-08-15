import { Component } from "react";
import { userService } from "../services/userService";
import { bitcoinService } from "../services/bitcoinService";

export class Home extends Component {
    state = {
        user: null,
        bitcoinRate:null
    }
    
    componentDidMount() {
        const user = userService.getUser()
        this.setState({ user },()=>{this.getBitRate(user.coins)})
    }

 getBitRate = async (coins) =>{
    try {
        const data = await bitcoinService.getRate(coins)
        this.setState({bitcoinRate:data})
    } catch (error) {
        console.log(error)
        throw error
    }
}
    
    render() {
        if (!this.state.user) return
        const { name, coins } = this.state.user
        return (
            <>
                <h1>Hello {name}!</h1>
                <h3>Coins: {coins}</h3>
                <h3>BTC: {this.state.bitcoinRate}</h3>
            </>
        )
    }
}