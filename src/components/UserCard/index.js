import React, {useState} from 'react'
import {Wrapper} from './styles'
import {Button} from '../Button'
import {UserForm} from '../UserForm'
export const UserCard =({user,index})=>{
	const [edit, setEdit] = useState(false);
	const editHandler=()=>{
		edit
		?setEdit(false)
		:setEdit(true)
		console.log('click')
	}
	return(
		<Wrapper>
			<div className="index">
				{index}
			</div>
			<div className="UserTitle">
				<h1>{`${user.name} ${user.lastName||''}`}</h1>
				<hr/>
			</div>
			<div className="ButtonWrapper">
				<Button clickHandler={editHandler} type="edit"/>
			</div>
			{edit 
			&& <UserForm/>}
		</Wrapper>
	)

}