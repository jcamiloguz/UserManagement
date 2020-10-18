import React from 'react'
import {Wrapper} from './styles'
import {Button} from '../Button'
export const UserCard =({user,index})=>{

	return(
		<Wrapper>
			<div className="index">
				{index}
			</div>
			<div className="UserTitle">
				<h1>{user.name}</h1>
				<hr/>
			</div>
			<div className="ButtonWrapper">
				<Button type="edit"/>
			</div>
		</Wrapper>
	)

}