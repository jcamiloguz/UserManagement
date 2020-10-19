import React from "react"
import {Users} from './pages/Users/index'
import {NewUser} from './pages/NewUser/index'
import {Home} from './pages/Home'
import {Header} from './components/Header'
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
			<Header/>
				<Switch> 
					<Route exact path='/'>
						<Home/>
					</Route>
					<Route exact path='/users'>
						<Users/>
					</Route>
					<Route exact path='/users/new'>
						<NewUser/>
					</Route>
				</Switch>
			</Router>
		</>

)