import { Component } from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    } from 'chart.js';
    
    ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
    );

export class Chart extends Component {
 componentDidMount() {
        console.log(this.props)
    }
    
    render() {
      if (!this.props) return <div>Loading...</div>
    return (
        <div className='chart'>
            <Line width={1000}
                height={500}
                data={this.props}
                options={{
                    title:{
                    display:true,
                    text:'Average Rainfall per month',
                        fontSize: 20,
                        maintainAspectRatio: false
                    },
                    legend:{
                    display:true,
                    position:'right'
                    }
                }}
        />
      </div>
    )
  }
}
