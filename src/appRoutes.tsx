import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { Login } from './components/pages/login/login'
import { UsersList } from './components/pages/users-list/users-list'
import { AlbumsList } from './components/pages/albums-list/albums-list'

export const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="login" element={<Login/>}/>
        <Route path="users-list" element={<UsersList/>}/>
        <Route path="albums-list" element={<AlbumsList/>}/>
      </Routes>
    </>
  )
}