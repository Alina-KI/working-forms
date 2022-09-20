import { Route, Routes } from 'react-router-dom'
import React from 'react'
import { Login } from './components/pages/login/login'

export const AppRoutes = () => {

  return (
    <>
      <Routes>
        <Route path="login" element={<Login/>}/>
      </Routes>
    </>
  )
}