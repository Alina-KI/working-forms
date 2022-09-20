import React, { useEffect, useMemo } from 'react'
import s from './paginator.module.scss'

type Props = {
  page: number
  setPage: (page: number) => void
  count: number
  showPage: number
}

const range = (start: number, end: number) => {
  return Array(end - start + 1).fill(0).map((_, idx) => start + idx)
}

export const Paginator = ({ page, setPage, count, showPage }: Props) => {
  const pagesNumber = range(page, page+showPage)
  return (
    <div className={s.buttonBlock}>
      {pagesNumber.map(pageNumber =>
        <button key={pageNumber} className={s.button} onClick={() => setPage(pageNumber)}>{pageNumber}</button>
      )}
    </div>
  )
}