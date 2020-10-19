import React, {useState,useEffect} from 'react'
import {UserCard} from '../UserCard'
import {List} from './styles'
export const UserList =()=>{
	const[users, setUser]=useState([])
	let index =0
	useEffect(() => {
		fetch(`https://jcamiloguz-userapi.herokuapp.com/users`)
		.then((res)=>res.json())
		.then(res=>setUser(res))
  },[]);

	return(
	<List>
		{
		users.map(user=>{
			index++
		return(<UserCard user={user} key={user.idUser} index={index}/>)})
		}
	</List>
	)
}