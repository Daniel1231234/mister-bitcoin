import { Component } from 'react'
import { userService } from '../services/userService'
import { NavLink } from 'react-router-dom'


export class TransferFund extends Component {
    state = {
      contact: this.props.contact,
      user: null,
      amount: 0,
      move:{},
  }
  
  async componentDidMount() {
    const user = await userService.getUser()
    this.setState({ user })
    // console.log(this.props)
  }

  handleChange = ({ target }) => {
    const field = target.name 
    const value = target.type === 'number' ? (+target.value || '') : target.value
    // console.log(field,value)
    this.setState(prevState => ({ amount: { ...prevState.amount, [field]: value } }))   
  }
  
  onSubmit = (ev) => {
    ev.preventDefault()
    const amount = this.state.amount
    userService.updateCoins(amount)
    const name = this.state.contact.name
    const move = userService.addMoves(name, amount)
    this.setState(prevState => ({ move: { ...prevState.move, move } }))  
    userService.saveMove(move)
  }

  render() {
    const { contact, user } = this.state
    const res =  <NavLink exact to='/'>Transter</NavLink> 
      // console.log(user)
      if (!user) return <div>Loading...</div>
      return (
        <div>
          <h4>Tranfer coins to {contact.name}</h4>
          <form onSubmit={this.onSubmit}>
            <input type="number" onChange={this.handleChange} name="amount" id="amount" />
            <button> {res} </button>
          </form>
        </div>
    )
  }
}
