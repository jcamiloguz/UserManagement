import React from 'react'
import {UserCard} from '../UserCard'
export const UserList =()=>{
	const users=[{id:1},{id:2},{id:3}]
	return(
	<ul>
		{
		users.map(user=>(<UserCard key={user.id}/>))
		}
	</ul>
	)
}