import React,{useEffect, useState} from 'react'
import {Form, Input} from './styles'
import {Button} from '../Button'
import { useHistory } from 'react-router'


export const UserForm =({data,type='new'})=>{
	const [state, setState]=useState({error:null,user:{firstName:'',lastName:'',email:'',userName:'',roles:[],active:'no'}})
	const history=useHistory()

	useEffect(()=>{
		if(type!=='new'){
			fetch(`https://jcamiloguz-userapi.herokuapp.com/user_roles/user/${data.idUser}`)
			.then((res)=>res.json())
			.then(res=>{setState(...state,{user:{...data , roles:res}})})
		}
		},[])
	const changeHandler=(e)=>{

			if(e.target.value===''){
				setState({...state,error:`Fill ${e.target.name} input`,user:{...state.user,
					[e.target.name]:e.target.value}})
			}else{
				setState({...state,error:null,user:{...state.user,
					[e.target.name]:e.target.value}})
		}
	}
	
	const deleteHandler=(e)=>{
		e.preventDefault()
		fetch(`https://jcamiloguz-userapi.herokuapp.com/users/${data.idUser}`,{
			method: 'DELETE', 
			headers: {
			 'Content-type': 'application/json; charset=UTF-8' 
			},
		 })
		 .then(res=>res.json)
		 .catch(err=>console.log(err))
		 .finally(()=>history.go(0))

	}
	const addHandler=(e)=>{
		e.preventDefault()
		const active = state.user.active==='yes'?true:false
		const postBody ={
			firstName:state.user.firstName,
			lastName:state.user.lastName,
			userName:state.user.userName,
			email:state.user.email,
			active:active,
		}
		console.log(JSON.stringify(postBody))
		fetch(`https://jcamiloguz-userapi.herokuapp.com/users`,{
			method: 'POST', 
			mode: 'cors', 
			headers: {
				'Content-type': 'application/json; charset=UTF-8' 
			},
			body: JSON.stringify(postBody) 
		})
		.then(res=>console.log(res))
	}
	return(
		<Form>
			<div >
				<h2>First Name:</h2>
				<Input name='firstName'onChange={changeHandler}value={state.user.firstName || ''}/>
			</div>
			<div >
				<h2>Last Name:</h2>
				<Input name='lastName'onChange={changeHandler} value={state.user.lastName || ''}/>
			</div>
			<div >
				<h2>Email:</h2>
				<Input name='email' onChange={changeHandler}type='email'value={state.user.email || ''}/>
			</div>
			<div >
				<h2>Username:</h2>
				<Input name='userName'onChange={changeHandler}value={state.user.userName || ''}/>
			</div>
			<div className="checkboxes">
				<h2>User role(s):</h2>
				<label>
  				<input type="checkbox" name='roleAdmin' onChange={changeHandler}  />
					<span className="checkmark">
  				</span>
					Administrator
				</label>
				<label>
  				<input type="checkbox" name='roleMember' onChange={changeHandler}  />
  				<span className="checkmark"></span>
					Member
				</label>
				<label>
  				<input type="checkbox" name='roleContr' onChange={changeHandler}  />
  				<span className="checkmark"></span>
					Contributor
				</label>
			</div>
			<div>
				<h2>User active:</h2>
				  <input type="radio" id='yes' name="active" value='yes'onChange={changeHandler} checked={state.user.active==='yes'} />
				<label>
					Yes
				</label>
				  <input type="radio" id='no' name="active" value='no'onChange={changeHandler} checked={state.user.active==='no'}/>
				<label>
					No
				</label>
			</div>
			{
			state.error!==null
			&& <h4>Error: {state.error}</h4>
			}
			<div className="buttons">
				{
					type==='new'
					?
					<Button  clickHandler={addHandler} type="add"/>
					:<> 
					<Button clickHandler={deleteHandler}type="delete"/>
					<Button type="save"/></>
				}
				
			</div>

		</Form>
	)
}