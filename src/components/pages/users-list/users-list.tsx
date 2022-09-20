import React from 'react'
import s from './users-list.module.scss'
import { useQuery } from '@tanstack/react-query'
import { getUsers, USERS } from '../../../api/users'

export const UsersList = () => {
  const { data: users = [] } = useQuery([USERS], getUsers)

  return (
    <div className={s.usersList}>
      <h1>Users List</h1>
      {users.map(user =>
        <div className={s.block} key={user.id}>
          <div className={s.data}>{user.id}</div>
          <div className={s.data}>{user.name}</div>
          <div className={s.data}>{user.username}</div>
          <div className={s.data}>{user.email}</div>
          <div className={s.data}>{user.address.city}</div>
        </div>
      )}
    </div>
  )
}