import React from 'react'
import s from './button.module.scss'

type Props = {
  text: string
  isLoading?: boolean
  isSuccess?: boolean
  isError?: boolean
}

export const Button = ({text, isLoading, isSuccess, isError}: Props) => {
  return (
    <button
      className={`${s.button} ${isLoading && `${s.loading}`} ${isSuccess && `${s.success}`} ${isError && `${s.error}`}`}>
      {isLoading &&
      <div className={s.ring}>
        <div> </div>
        <div> </div>
        <div> </div>
        <div> </div>
      </div>
      }
      {text}
    </button>
  )
}