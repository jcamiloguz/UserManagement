import React from "react"
import {Users} from './pages/Users'
import {NewUser} from './pages/NewUser'
import {GlobalStyle} from './styles/GlobalStyles'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export  const App =()=>(
		<>
			<GlobalStyle/>
			<Router>
				<Switch> 
					<Route exact path='/'>
						<Users/>
					</Route>
					<Route exact path='/users/new'>
						<NewUser/>
					</Route>
				</Switch>
			</Router>
		</>

)