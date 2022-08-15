
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
);

export function Chart({chartData}) {
    const  options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'misterBitcoin',
            },
        },
    }
       
           const data = {
                labels: chartData.values.map((itm) => {
                    const day = new Date(itm.x*1000).getDate()
                    const month = (new Date(itm.x*1000)+'').substring(4,7)
                    return day+' '+month            
                }),
                datasets: [
                    {
                        label: 'BTC MarketPrice (USD)',
                        data: chartData.values.map((itm)=>itm.y),
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }
        return <Line options={options} data={data} />
}


