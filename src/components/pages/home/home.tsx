import React, { useState } from 'react'
import s from './home.module.scss'
import { ComboBox } from '../../ui/combo-box/combo-box'
import { ChooseInput } from '../../ui/choose-input/choose-input'

export const Home = () => {
  const [value, setValue] = useState('')
  const data = [
    'Leanne Graham',
    'Ervin Howell',
    'Clementine Bauch',
    'Patricia Lebsack',
    'Chelsey Dietrich',
    'Dennis Schulist',
    'Kurtis Weissnat',
    'Nicholas Runolfsdottir',
    'Glenna Reichert',
    'Clementina DuBuque'
  ]

  return (
    <div className={s.home}>
      <ComboBox title="text" data={data} value={value} setValue={setValue}/>
      <ChooseInput/>
    </div>
  )
}