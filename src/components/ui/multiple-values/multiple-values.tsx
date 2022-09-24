import React, { useState } from 'react'
import s from './multiple-values.module.scss'
import { ReactComponent as ArrowIcon } from '../../../assets/images/icon/arrow.svg'
import { ReactComponent as CrossIcon } from '../../../assets/images/icon/cross.svg'
import { AnimatePresence, motion } from 'framer-motion'
import { useInternalClick } from '../../../hooks/use-internal-click'

type Props = {
  data: string[]
  multipleValues: string[]
  setMultipleValues: (values: string[]) => void
  title: string
}

export const MultipleValues = ({ data, title, multipleValues, setMultipleValues }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  useInternalClick(s.block, {
      onExternalClick: () => setIsOpen(false),
      onInternalClick: () => setIsOpen(true),
    }
  )

  return (
    <div className={ s.block }>
      <ArrowIcon className={`${s.arrowIcon} ${isOpen && `${s.activeIcon}`}`}/>
      {multipleValues.length > 0 &&
      <CrossIcon onClick={() => setMultipleValues([])} className={s.crossIcon}/>
      }
      <motion.span layoutId='title' transition={{duration: .5}}
        className={`${ s.title } ${multipleValues.length > 0 && `${s.titleActive}`}`}>
        {title}
      </motion.span>
      <div className={`${ s.blockData } ${isOpen && `${s.openBlock}`}`}>
        {isOpen && multipleValues.map(item =>
          <div key={item} className={s.value}>
            <span>{item}</span>
            <CrossIcon onClick={() => setMultipleValues(multipleValues.filter(value => value !== item))} className={s.crossIcon}/>
          </div>
        )}
        {
          !isOpen && multipleValues.length > 0 &&
          <>
            <div className={s.value}>
              <span>{multipleValues[0]}</span>
              <CrossIcon onClick={() => setMultipleValues(multipleValues.filter(value => value !== multipleValues[0]))} className={s.crossIcon}/>
            </div>
            {multipleValues.length > 1 &&
              <span>+{multipleValues.length - 1}</span>
            }
          </>
        }
      </div>
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial="collapsed" animate="open" exit="collapsed"
          variants={{ open: { opacity: 1, height: 'auto' }, collapsed: { opacity: 0, height: 0 } }}
          transition={{ duration: .8, ease: [0.04, 0.62, 0.23, 0.98] }} className={s.data}>
          {
            data.map(item => {
                if (multipleValues.find(value => value === item)) {
                  return <span key={item} className={`${ s.item } ${s.chosenItem}`}
                               onClick={() => setMultipleValues(multipleValues.filter(value => value !== item))}>{item}</span>
                }
                return <span key={item} className={s.item}
                             onClick={() => setMultipleValues([...multipleValues, item])}>{item}</span>

              }
            )
          }
        </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}