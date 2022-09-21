import React, { useMemo, useState } from 'react'
import s from './combo-box.module.scss'

type Props = {
  title: string
  data: string[]
}

export const ComboBox = ({ title, data }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const newData = useMemo(() => {
    return data.filter((item: string) => item.includes(value))
  }, [value])

  return (
    <div className={s.comboBox}>
      <div className={s.blockInput} onClick={() => setIsOpen(!isOpen)}>
        <input value={value} onChange={(e) => setValue(e.target.value)} className={s.input} type="text" required={true}/>
        <span className={s.label}>{title}</span>
        <i className={s.i}> </i>
        <svg className={`${ s.icon } ${isOpen && `${s.activeIcon}`}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
      </div>
      {isOpen &&
      <div className={s.data}>
        {newData.map(item =>
          <span key={item} className={s.item} onClick={() => setValue(item)}>{item}</span>
        )}
      </div>
      }
    </div>
  )
}