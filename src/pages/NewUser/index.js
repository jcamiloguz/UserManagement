import React from 'react'
import {UserForm} from '../../components/UserForm'
import {Container} from './styles'

export const NewUser =()=>{
	return(
		<Container>
			<h1>Create New User</h1>
			<br/>
			<UserForm/>
		</Container>

	)
}