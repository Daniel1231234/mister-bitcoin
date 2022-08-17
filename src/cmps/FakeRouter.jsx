import { HashRouter as Redirect, Route } from "react-router-dom"
import { Component } from "react"
import { userService } from "../services/userService"


export const PrivateRoute = (props) => {
  const isAdmin = true
  // console.log(props)
  // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
  return isAdmin ? <Route {...props} /> : <Redirect to='/' />
}


export class ProtectedRoute extends Component {
  state = {
    user:null
  }

  componentDidMount = () => {
    const user = userService.getUser()
    // console.log(user)
    this.setState({user})
  }


  render() {
    const { component: Component, ...props } = this.props
    const {user} = this.state
    return (
      <Route 
        {...props} 
        render={props => (
          user.name ?
            <Component {...props} /> :
            <Redirect to='/signup' />
        )} 
      />
    )
  }
}