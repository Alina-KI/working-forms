import React, { useMemo } from 'react'
import s from './paginator.module.scss'

type Props = {
  page: number
  setPage: (page: number) => void
  endPage: number
  showPage: number
}

const range = (start: number, end: number) => {
  return Array(end - start + 1).fill(0).map((_, idx) => {
    return start + idx
  })
}

export const Paginator = ({ page, setPage, endPage, showPage }: Props) => {
  const pagesNumber = useMemo<number[]>(() => {
    if (endPage > 0) {
      if (page === 1) {
        return [1, ...range(page + 1, page + showPage), endPage]
      } else {
        if (page >= endPage || page + showPage >= endPage) {
          return [1, ...range(endPage - showPage, endPage - 1), endPage]
        } else {
          return [1, ...range(page, page + showPage - 1), endPage]
        }
      }
    }
    return []
  }, [page, endPage, showPage])
  return (
    <div className={s.buttonBlock}>
      {pagesNumber.map((pageNumber:number, id: number) =>
        <React.Fragment key={pageNumber}>
          <button className={s.button} onClick={() => setPage(pageNumber)}>{pageNumber}</button>
          {pageNumber < pagesNumber[id + 1] - 1 && <div>...</div>}
        </React.Fragment>
      )}
    </div>
  )
}