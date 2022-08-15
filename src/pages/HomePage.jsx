import  { Component } from 'react'
import { userService } from '../services/userService'
import {bitcoinService} from '../services/bitcoinService'
export class HomePage extends Component {
  state = {
    user: null,
    rate: null,
  }

  componentDidMount() {
    this.loadUser()
  }

  async loadUser() {
    try {
      const user = await userService.getUser()
      this.setState({ user })
      const rate = await bitcoinService.getRate(user.coins)
      this.setState({rate})
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const { user, rate } = this.state
    if (!user) return <div>Loadind...</div>
    return (
      <div className='home-page'>
        <h2> Welcome back,  <span className='username-home md-font'>{user.name.toUpperCase()}</span></h2>
        <hr />
        <p>You've got {user.coins} Coins</p>
        <p>The Current Bitcoin rate is: {rate}  </p>
      </div>
    )
  }
}
