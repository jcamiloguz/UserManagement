import React, { useEffect, useState } from 'react'
import { Form, Input } from './styles'
import { Button } from '../Button'
import { useHistory } from 'react-router'
import { createUser, deleteUser,updateUser } from '../../api'

export const UserForm = ({ data={}, type = 'new' }) => {
  const [state, setState] = useState({
    error: null,
    user: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
			roleAdmin:'off',
			roleMember:'off',
			roleContr:'off',
      active: data.active===1 ? 'yes': 'no',
    },
  })
  const history = useHistory()

  useEffect(() => {
		
    if (type !== 'new') {
      fetch(
        `https://jcamiloguz-userapi.herokuapp.com/user_roles/user/${data.idUser}`
      )
        .then((res) => res.json())
        .then((res) => {
					res.map(realation=>{
						switch (realation.idRoleUR) {
							case 1:
								state.user.roleAdmin='on'
								break;
							case 11:
								state.user.roleMember='on'
								break;
							case 21:
								state.user.roleContr='on'
								break;
						
							default:
								break;
						}
					})
        })
    }
  }, [])
  const changeHandler = (e) => {
    console.log(e.target.name + ' ' + e.target.value)
    if (e.target.value === '') {
      setState({
        ...state,
        error: `Fill ${e.target.name} input`,
        user: { ...state.user, [e.target.name]: e.target.value },
      })
    } else {
      setState({
        ...state,
        error: null,
        user: { ...state.user, [e.target.name]: e.target.value },
      })
    }
	}
	const checkboxHandler=(e)=>{
		switch (e.target.name) {
			case 'roleAdmin':
					state.user.roleAdmin==='on'
					?state.user.roleAdmin='off'
					:state.user.roleAdmin='on'
				break;
			case 'roleMember':
					state.user.roleMember==='on'
					?state.user.roleMember='off'
					:state.user.roleMember='on'
				break;
			case 'roleContr':
					state.user.roleContr==='on'
					?state.user.roleContr='off'
					:state.user.roleContr='on'
				break;
		
			default:
				break;
		}
	}

  const deleteHandler = async (e) => {
		e.preventDefault()
		await deleteUser(data)
    history.go(0)
  }
  const addHandler = async (e) => {
    e.preventDefault()
    await createUser(state.user)
    history.push('/users')
	}
	const updateHandler=async(e)=>{
		e.preventDefault()
		await updateUser(state.user,data)
		history.go(0)
	}
  return (
    <Form>
      <div>
        <h2>First Name:</h2>
        <Input
          name="firstName"
          onChange={changeHandler}
          placeholder={data.firstName || ''}
        />
      </div>
      <div>
        <h2>Last Name:</h2>
        <Input
          name="lastName"
          onChange={changeHandler}
          placeholder={data.lastName || ''}
        />
      </div>
      <div>
        <h2>Email:</h2>
        <Input
          name="email"
          onChange={changeHandler}
          type="email"
          placeholder={data.email || ''}
        />
      </div>
      <div>
        <h2>Username:</h2>
        <Input
          name="userName"
          onChange={changeHandler}
          placeholder={data.userName || ''}
        />
      </div>
      <div className="checkboxes">
        <h2>User role(s):</h2>
        <label>
          <input type="checkbox" name="roleAdmin" onChange={checkboxHandler} value={state.user.roleAdmin==='on'}/>
          <span className="checkmark"></span>
          Administrator
        </label>
        <label>
          <input type="checkbox" name="roleMember" onChange={checkboxHandler}value={state.user.roleMember==='on'} />
          <span className="checkmark"></span>
          Member
        </label>
        <label>
          <input type="checkbox" name="roleContr" onChange={checkboxHandler} value={state.user.roleContr==='on'}/>
          <span className="checkmark"></span>
          Contributor
        </label>
      </div>
      <div>
        <h2>User active:</h2>
        <input
          type="radio"
          id="yes"
          name="active"
          value="yes"
          onChange={changeHandler}
          checked={state.user.active === 'yes'}
        />
        <label>Yes</label>
        <input
          type="radio"
          id="no"
          name="active"
          value="no"
          onChange={changeHandler}
          checked={state.user.active === 'no'}
        />
        <label>No</label>
      </div>
      {state.error !== null && <h4>Error: {state.error}</h4>}
      <div className="buttons">
        {type === 'new' ? (
          <Button clickHandler={addHandler} type="add" />
        ) : (
          <>
            <Button clickHandler={deleteHandler} type="delete" />
            <Button clickHandler={updateHandler}type="save" />
          </>
        )}
      </div>
    </Form>
  )
}
