 import React from 'react'
import {UserCard} from '../UserCard'
import {List} from './styles'
export const UserList =()=>{
	const users=[{id:"dsa23",firstName:"Juan Camilo", lastName:"Guzman Sandoval", userName:"jcamiloguz",roles:['admin'],active:true,email:'jcamiloguz1@gmail.com'}]
	let index =0
	return(
	<List>
		{
		users.map(user=>{
			index++
		return(<UserCard user={user} key={user.id} index={index}/>)})
		}
	</List>
	)
}