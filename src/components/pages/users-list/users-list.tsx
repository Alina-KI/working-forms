import React from 'react'
import s from './users-list.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getUsers, USERS } from '../../../api/users'

export const UsersList = () => {
  const { data: users = [] } = useQuery([USERS], getUsers)

  return (
    <div>
      {users.map(user =>
        <div className={s.block} key={user.id}>
          <div>{user.name}</div>
          <div>{user.username}</div>
          <div>{user.email}</div>
          <div>{user.address.city}</div>
        </div>
      )}
    </div>
  )
}