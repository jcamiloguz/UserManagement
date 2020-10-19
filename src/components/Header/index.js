import React from 'react'
import {NavLink} from 'react-router-dom'
import {Container} from './styles'
import {AiFillHome} from 'react-icons/ai'

export const Header =()=>{
	return(
			<Container>
				<nav>
					<NavLink exact to='/' ><AiFillHome/> Home</NavLink>
					<NavLink exact to='/users' >Users</NavLink>
				</nav>
			</Container>
	)
}