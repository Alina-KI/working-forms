import React, { useState } from 'react'
import s from './home.module.scss'
import { ComboBox } from '../../ui/combo-box/combo-box'

export const Home = () => {
  const [value, setValue] = useState('')
  const data = ['atext 1', 'btext 2', 'text 3']

  return (
    <div className={s.home}>
      <ComboBox title='text' data={data} value={value} setValue={setValue}/>
    </div>
  )
}