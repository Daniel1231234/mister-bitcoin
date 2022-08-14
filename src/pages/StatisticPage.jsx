import { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoinService'

export class StatisticPage extends Component {
  state = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], 
    datasets: null
  }

  componentDidMount() {
    this.loadMarketPrice()
  }

  async loadMarketPrice() {
    try {
      const {name, priceX} = await bitcoinService.getMarketPlace()
      const datasets = [
        {
        label: name, 
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: priceX
        },
      ]
      console.log(datasets)
      this.setState({datasets })
    } catch (err) {
      console.log(err)
    }
  }


  render() {
    const { datasets, labels } = this.state
    if (!datasets || !labels) return <div>Loading...</div>
    return (
      <div>
        <section>
       <h2>Market price</h2>   
        <Chart datasets={datasets} labels={labels} />
        </section>
        <section>
          <h2>Confirmed transactions per day</h2>  
          {/* <Chart /> */}
        </section>
      </div>
    )
  }
}
