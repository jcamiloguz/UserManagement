 import React from 'react'
import {UserCard} from '../UserCard'
import {List} from './styles'
export const UserList =()=>{
	const users=[{id:"dsa23",name:"Juan"},{id:"dsa2",name:"Pedros"}]
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