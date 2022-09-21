import React from 'react'
import s from './home.module.scss'
import { ComboBox } from '../../ui/combo-box/combo-box'

export const Home = () => {
  const data = ['atext 1', 'btext 2', 'text 3']
  return (
    <div>
      <ComboBox title='text' data={data}/>
    </div>
  )
}