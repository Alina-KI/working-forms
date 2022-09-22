import React, { useMemo, useState } from 'react'
import s from './combo-box.module.scss'
import { useInternalClick } from '../../../hooks/use-internal-click'
import { Input } from '../input/input'
import { ReactComponent as ArrowIcon } from '../../../assets/images/icon/arrow.svg'
import { ReactComponent as CrossIcon } from '../../../assets/images/icon/cross.svg'
import { DataInput } from '../data-input/data-input'

type Props = {
  title: string
  data: string[]
  value: string
  setValue: (value: string) => void
}

export const ComboBox = ({ title, data, value, setValue }: Props) => {
  const newData = useMemo(() => {
    return data.filter((item: string) => item.includes(value))
  }, [value])
  const [isOpen, setIsOpen] = useState(false)
  useInternalClick(s.comboBox, {
      onExternalClick: () => setIsOpen(false),
      onInternalClick: () => setIsOpen(true),
    }
  )

  return (
    <div className={s.comboBox}>
      <Input title={title} type="text" value={value} onChange={(e) => setValue(e.target.value)} className={s.input}>
        <ArrowIcon className={`${s.arrowIcon} ${isOpen && `${s.activeIcon}`}`}/>
        {value !== '' &&
        <CrossIcon onClick={() => setValue('')} className={s.crossIcon}/>
        }
      </Input>
      <DataInput data={newData} isOpen={isOpen} setValue={setValue}/>
    </div>
  )
}