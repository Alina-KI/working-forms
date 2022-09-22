import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import s from './data-input.module.scss'

type Props = {
  isOpen: boolean
  setValue: (value: string) => void
  data: string[]
}

export const DataInput = ({ data, isOpen, setValue }: Props) => {
  return (
    <AnimatePresence>
      {isOpen &&
      <motion.div
        initial="collapsed" animate="open" exit="collapsed"
        variants={{ open: { opacity: 1, height: 'auto' }, collapsed: { opacity: 0, height: 0 } }}
        transition={{ duration: .8, ease: [0.04, 0.62, 0.23, 0.98] }} className={s.data}>
        {data.length > 0
          ?
          data.map(item =>
            <span key={item} className={s.item} onClick={() => setValue(item)}>{item}</span>
          )
          :
          <span className={s.item}>No options</span>
        }
      </motion.div>
      }
    </AnimatePresence>
  )
}