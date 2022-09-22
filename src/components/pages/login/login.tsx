import React from 'react'
import s from './login.module.scss'
import { Input } from '../../ui/input/input'

export const Login = () => {
  return (
    <div className={s.box}>
      <form className={s.form}>
        <h2 className={s.title}>Sign in</h2>
        <Input title='Login' type='text'/>
        <Input title='Password' type='password'/>
        <div className={s.blockLink}>
          <span className={s.link}>Forgot password</span>
          <span className={s.link}>Sing up</span>
        </div>
        <button className={s.login}>Login</button>
      </form>
    </div>
  )
}