export const createUser = async (user) => {
  const active = user.active === 'yes' ? true : false
  const postBody = {
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    active: active,
  }
  console.log(JSON.stringify(postBody))
  const response = await fetch(
    `https://jcamiloguz-userapi.herokuapp.com/users`,
    {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(postBody),
    }
  )
	const data = await response.json()
	console.log(data)
  if (user.roleAdmin) {
    const Adminresponse = await fetch(
      `https://jcamiloguz-userapi.herokuapp.com/user_roles/${data.id}/1`,
      {
				method: 'POST',
        mode: 'cors',
        headers: {
					'Content-type': 'application/json; charset=UTF-8',
        },
      }
			)
		}
		if (user.roleMember) {
			const Memberresponse = await fetch(
				`https://jcamiloguz-userapi.herokuapp.com/user_roles/${data.id}/11`,
				{
					method: 'POST',
					mode: 'cors',
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				}
				)
			}
			if (user.roleContr) {
				const Contrresponse = await fetch(
					`https://jcamiloguz-userapi.herokuapp.com/user_roles/${data.id}/21`,
      {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
  }
}
export const updateUser = async (user,data) => {
  const active = user.active === 'yes' ? true : false
  const postBody = {
    firstName: user.firstName,
    lastName: user.lastName,
    userName: user.userName,
    email: user.email,
    active: active,
  }
  console.log(JSON.stringify(postBody))
  const response = await fetch(
    `https://jcamiloguz-userapi.herokuapp.com/users/${data.idUser}`,
    {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(postBody),
    }
  )
	const res = await response.json()
	console.log(res)
  
}
export const deleteUser = (data	) => {
	fetch(`https://jcamiloguz-userapi.herokuapp.com/users/${data.idUser}`, {
		method: 'DELETE',
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})

	
}
