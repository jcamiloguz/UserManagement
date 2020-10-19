import React, { useEffect, useState } from 'react'
import { Form, Input } from './styles'
import { Button } from '../Button'
import { useHistory } from 'react-router'
import { createUser, deleteUser } from '../../api'

export const UserForm = ({ data={}, type = 'new' }) => {
  const [state, setState] = useState({
    error: null,
    user: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      roles: [],
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
					console.log(res)
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
          <input type="checkbox" name="roleAdmin" onChange={changeHandler} />
          <span className="checkmark"></span>
          Administrator
        </label>
        <label>
          <input type="checkbox" name="roleMember" onChange={changeHandler} />
          <span className="checkmark"></span>
          Member
        </label>
        <label>
          <input type="checkbox" name="roleContr" onChange={changeHandler} />
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
            <Button type="save" />
          </>
        )}
      </div>
    </Form>
  )
}
