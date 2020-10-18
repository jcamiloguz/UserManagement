import React from 'react'
import {Form, Input} from './styles'
import {Button} from '../Button'



export const UserForm =({user ={}})=>{
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
  				<input type="checkbox" />
					<span className="checkmark">
  				</span>
					Administrator
				</label>
				<label>
  				<input type="checkbox" />
  				<span className="checkmark"></span>
					Member
				</label>
				<label>
  				<input type="checkbox" />
  				<span className="checkmark"></span>
					Contributor
				</label>
			</div>
			<div>
				<h2>User active:</h2>
				<label>
				  <input type="radio" name="radio"/>
  				<span className="checkmark"></span>
					Yes
				</label>
				<label>
				  <input type="radio" name="radio"/>
  				<span className="checkmark"></span>
					No
				</label>
			</div>
			<div className="buttons">
				<Button type="delete"/>
				<Button type="save"/>
			</div>

		</Form>
	)
}