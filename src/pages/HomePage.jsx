import  { Component } from 'react'
import { userService } from '../services/userService'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoinService'
import { MoveList } from '../cmps/MoveList'
// import { SiBitcoinsv } from 'react-icons/fa';
// import { SiBitcoinsv } from "react-icons/si";

export class HomePage extends Component {
  state = {
    user: null,
    rate: null,
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'], 
    marketPrice: null,
  }
  
  async componentDidMount() {
    const user = await userService.getUser()
    const rate = await bitcoinService.getRate(user.coins)
    this.setState({ user, rate })
    this.loadMarketPrice()
  }
  
  async loadMarketPrice() {
    try {
      const {name, values} = await bitcoinService.getMarketPrice()
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

  render() {
    const { user, rate, marketPrice, labels } = this.state
    if (!user || !marketPrice) return <div>Loadind...</div>

    return (
      <div className='home-page container'>
        <h2> Welcome back,  <span className='username-home md-font'>{user.name.toUpperCase()}</span></h2>
        <div>
          <hr />
          <div className='home-status'>
          <p>Coins:<span>{user.coins} </span> </p>
            <p>Btc: <span>{rate}</span> </p>
          </div>
        <hr />
        </div>
        <section className='home-chart'>
          <Chart datasets={marketPrice} labels={labels} />
        <hr />
        </section>
        <MoveList user={user} />
        <hr />
      </div>
    )
  }
}
