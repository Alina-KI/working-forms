import React, { useMemo, useState } from 'react'
import s from './combo-box.module.scss'
import { useInternalClick } from '../../../hooks/use-internal-click'
import { Input } from '../input/input'
import { AnimatePresence, motion } from 'framer-motion'
import { ReactComponent as ArrowIcon } from '../../../assets/images/icon/arrow.svg'
import { ReactComponent as CrossIcon } from '../../../assets/images/icon/cross.svg'

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
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial="collapsed" animate="open" exit="collapsed"
          variants={{ open: { opacity: 1, height: 'auto' }, collapsed: { opacity: 0, height: 0 } }}
          transition={{ duration: .8, ease: [0.04, 0.62, 0.23, 0.98] }} className={s.data}>
          {newData.length > 0
            ?
            newData.map(item =>
              <span key={item} className={s.item} onClick={() => setValue(item)}>{item}</span>
            )
            :
            <span className={s.item}>No options</span>
          }
        </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}