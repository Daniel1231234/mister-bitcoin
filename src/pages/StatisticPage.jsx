import { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoinService'

export class StatisticPage extends Component {
  state = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], 
    marketPrice: null,
    transactions: null,
  }

  componentDidMount() {
    this.loadMarketPrice()
    this.loadTransactions()
  }

  async loadMarketPrice() {
    try {
      const {name, values} = await bitcoinService.getMarketPlace()
      const datasets = [
        {
        label: name, 
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: values
        },
      ]
      this.setState({marketPrice: datasets })
    } catch (err) {
      console.log(err)
    }
  }

  async loadTransactions() {
    try {
      const { name, values } = await bitcoinService.getConfirmedTransactions()
      const datasets = [
        {
        label: name, 
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: values
        },
      ]
      this.setState({transactions:datasets })
    } catch (err) {
      console.log(err)
}
  }


  render() {
    const { transactions, marketPrice, labels } = this.state
    if (!transactions || !labels || !marketPrice) return <div>Loading...</div>
    return (
      <div className='statistics'>
    
       <h3>Market price</h3>   
        <Chart datasets={marketPrice} labels={labels} />
 
          <h3>Confirmed transactions per day</h3>  
          <Chart  datasets={transactions} labels={labels} />

      </div>
    )
  }
}
