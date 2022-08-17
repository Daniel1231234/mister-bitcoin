import { Component } from 'react'
import TextField from '@mui/material/TextField';
import { userService } from '../services/userService'
import Avatar from "@mui/material/Avatar";
// import Button from '@mui/material/Button';



export class Signup extends Component {
    state = {
        user:userService.getEmptyUser(),
  }
  
  saveUser = (ev) => {
    ev.preventDefault()
    console.log(this.state.user)
    const user = userService.signUp(this.state.user)
    this.setState({ user })
    this.props.history.push('/home')
  }

  
handleChange = ({ target }) => {
  const field = target.name 
  const value = target.type === 'number' ? (+target.value || '') : target.value
  this.setState(prevState => ({ user: { ...prevState.user, [field]: value } }))   
}
  

    render() {
    const { name } = this.state.user
      return (
        <div className='signup container'>
          <form onSubmit={this.saveUser}>
            <h2>Signup</h2>
            <Avatar style={{ width: 100, height: 100}} />
            <label htmlFor='name'></label>
            <TextField  size="small" value={name}  onChange={this.handleChange} type="text" name="name" id="name" label={'Please enter your name'} required/>
            <button  className='simple-button medium-button'>Start Trading!</button>
            {/* <Button onSubmit={this.saveUser} variant="outlined" size="large">Start Trading!</Button> */}
          </form>
       </div>
      )
  } 
}
