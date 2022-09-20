import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { Login } from './components/pages/login/login'
import { UsersList } from './components/pages/users-list/users-list'

export const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="list-users" element={<UsersList/>}/>
      </Routes>
    </>
  )
}