import { HashRouter as  Redirect, Route} from "react-router-dom"


export const PrivateRoute = (props) => {
  const isAdmin = true
  // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/' />
  return isAdmin ? <Route {...props} /> : <Redirect to='/' />
}