import React, { useState } from 'react'
import s from './albums-list.module.scss'
import { useQuery } from '@tanstack/react-query'
import { ALBUMS, getAlbums } from '../../../api/albums'
import { Paginator } from '../paginator/paginator'

export const AlbumsList = () => {
  const showPage = 5
  const [page, setPage] = useState<number>(1)
  const { data: albums = { items: [], count: 0 } } = useQuery([ALBUMS, { page }], () => getAlbums(page, showPage))
  return (
    <div className={s.albumsList}>
      <div className={s.albumBlock}>
        {albums.items.map(album =>
          <div className={s.album} key={album.id}>
            <div>{album.title}</div>
          </div>
        )}
      </div>
      <Paginator page={page} setPage={setPage} endPage={albums.count/showPage} showPage={showPage}/>
    </div>
  )
}