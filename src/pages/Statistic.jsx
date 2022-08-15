import React from 'react';
import { Chart } from '../cmps/Chart';
import { bitcoinService } from '../services/bitcoinService';

export class Statistics extends React.Component {
    state = {
        marketPrice: null,
    }

    
    componentDidMount() {
        this.loadMarketPrice()
    }

    loadMarketPrice = async () => {
        const marketPrice = await bitcoinService.getMarketPrice()
        this.setState({marketPrice})
    }

    render() {
        const { marketPrice } = this.state
        if (!marketPrice) return
        return <Chart chartData={marketPrice}/>
    }
}


