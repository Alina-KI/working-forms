import React from 'react'
import s from './login.module.scss'

export const Login = () => {
  return (
    <div className={s.box}>
      <form className={s.form}>
        <h2 className={s.title}>Sign in</h2>
        <div className={s.blockInput}>
          <input className={s.input} type="text" required={true}/>
          <span className={s.label}>Username</span>
          <i className={s.i}> </i>
        </div>
        <div className={s.blockInput}>
          <input className={s.input} type="password" required={true}/>
          <span className={s.label}>Password</span>
          <i className={s.i}> </i>
        </div>
        <div className={s.blockLink}>
          <span className={s.link}>Forgot password</span>
          <span className={s.link}>Sing up</span>
        </div>
        <button className={s.login}>Login</button>
      </form>
    </div>
  )
}