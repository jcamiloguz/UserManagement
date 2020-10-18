import React from 'react'
import {Link,useRouteMatch} from 'react-router-dom'
import {UserList} from '../components/UserList'
import {Button} from '../components/Button'

export const Users =()=>{
	let { path, url } = useRouteMatch();
	return	(
		<>
			<UserList/>
			<Link to={`${url}/new`}>
				<Button type='add'/>
			</Link>
		</>
		)
	
}