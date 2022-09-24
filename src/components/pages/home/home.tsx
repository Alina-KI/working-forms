import React, { useState } from 'react'
import s from './home.module.scss'
import { ComboBox } from '../../ui/combo-box/combo-box'
import { MultipleValues } from '../../ui/multiple-values/multiple-values'
import { Button } from '../../ui/button/button'

export const Home = () => {
  const [value, setValue] = useState('')
  const [multipleValues, setMultipleValues] = useState<string[]>([])
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
      <div className={s.block}>
        <ComboBox title="Combo Box" data={data} value={value} setValue={setValue}/>
        <MultipleValues data={data} multipleValues={multipleValues} setMultipleValues={setMultipleValues} title='Multiple values'/>
      </div>
      <div className={s.block}>
        <Button text='button'/>
        <Button text='loading' isLoading={true}/>
        <Button text='success' isSuccess={true}/>
        <Button text='error' isError={true}/>
      </div>
    </div>
  )
}