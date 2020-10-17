import React from 'react'
import {Wrapper} from './styles'
import {Button} from '../Button'
export const UserCard =({user,index})=>{

	return(
		<Wrapper>
			<div className="index">
				{1}
			</div>
			<div className="UserTitle">
				<h1>Holaa</h1>
				<hr/>
			</div>
			<div className="ButtonWrapper">
				<Button type="edit"/>
			</div>
		</Wrapper>
	)

}