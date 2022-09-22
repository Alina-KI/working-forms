import React, { ReactNode } from 'react'
import s from './input.module.scss'

type Props = {
  title: string
  type: string
  children?: ReactNode
  value?: string
  onChange?: (e:  React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export const Input = ({title, type, children, value, onChange, className}: Props) => {
  return (
    <div className={s.blockInput}>
      <input value={value} className={`${ s.input } ${className}`} type={type} onChange={onChange} required={true}/>
      <span className={s.label}>{title}</span>
      <i className={s.i}> </i>
      {children}
    </div>
  )
}