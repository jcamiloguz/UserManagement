import React, {useState} from 'react'
import {Wrapper} from './styles'
import {Button} from '../Button'
import {UserForm} from '../UserForm'
import {MdClose} from 'react-icons/md'

export const UserCard =({user,index,changeHandler})=>{
	const [edit, setEdit] = useState(false);
	const editHandler=()=>{
		edit
		?setEdit(false)
		:setEdit(true)
		console.log('click')
	}
	return(
		<Wrapper edit={edit}>
			<div className="index">
				{index}
			</div>
			<div className="UserTitle">
				<h1>{`${user.firstName} ${user.lastName||''}`}</h1>
				<h3>{` @${user.userName||''}`}</h3>
				<hr/>
			</div>
			<div className="ButtonWrapper">
			{!edit 
			&&<Button clickHandler={editHandler} type="edit"/>
			}
			</div>
			{edit 
			&&<div onClick={editHandler} className="exit"><MdClose/> </div>
			}
			{edit 
			&& <UserForm type='edit'data={user} changeHandler={changeHandler}/>}
		</Wrapper>
	)

}