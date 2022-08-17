import { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoinService'

export class StatisticPage extends Component {
  state = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], 

    transactions: null,
  }

  componentDidMount() {
 
    this.loadTransactions()
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
    const { transactions,  labels } = this.state
    if (!transactions || !labels ) return <div>Loading...</div>
    return (
      <div className='statistics container'>
          <h3>Confirmed transactions per day</h3>  
          <Chart datasets={transactions} labels={labels} />

      </div>
    )
  }
}
