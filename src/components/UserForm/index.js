import React,{useEffect, useState} from 'react'
import {Form, Input} from './styles'
import {Button} from '../Button'



export const UserForm =({user ={},type='new'})=>{
	const [roles, setRoles]=useState([])
	useEffect(()=>{
		if(type!=='new'){
			fetch(`https://jcamiloguz-userapi.herokuapp.com/user_roles/user/${user.idUser}`)
			.then((res)=>res.json())
			.then(res=>setRoles(res))
		}
	})
	return(
		<Form>
			<div >
				<h2>First Name:</h2>
				<Input value={user.firstName || ''}/>
			</div>
			<div >
				<h2>Last Name:</h2>
				<Input value={user.lastName || ''}/>
			</div>
			<div >
				<h2>Email:</h2>
				<Input value={user.email || ''}/>
			</div>
			<div >
				<h2>Username:</h2>
				<Input value={user.userName || ''}/>
			</div>
			<div className="checkboxes">
				<h2>User role(s):</h2>
				<label>
  				<input type="checkbox" name='roles' checked={type!=='new'?roles.find(role=>role.idRoleUR===1):false} />
					<span className="checkmark">
  				</span>
					Administrator
				</label>
				<label>
  				<input type="checkbox" name='roles' checked={type!=='new'?roles.find(role=>role.idRoleUR===11):false} />
  				<span className="checkmark"></span>
					Member
				</label>
				<label>
  				<input type="checkbox" name='roles' checked={type!=='new'?roles.find(role=>role.idRoleUR===21):false} />
  				<span className="checkmark"></span>
					Contributor
				</label>
			</div>
			<div>
				<h2>User active:</h2>
				  <input type="radio" id='yes' name="active" value='yes' checked={type!=='new'?user.active=== 1:false} />
				<label>
					Yes
				</label>
				  <input type="radio" id='no' name="active" value='no'checked={type!=='new'?user.active!== 1:false}/>
				<label>
					No
				</label>
			</div>
			<div className="buttons">
				{
					type==='new'
					?
					<Button type="add"/>
					:<> 
					<Button type="save"/>
					<Button type="delete"/></>
				}
				
			</div>

		</Form>
	)
}