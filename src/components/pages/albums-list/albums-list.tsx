import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ALBUMS, getAlbums } from '../../../api/albums'

export const AlbumsList = () => {
  const [page, setPage] = useState<number>(1)
  const { data: albums = { items: [], count: 0 } } = useQuery([ALBUMS, { page }], () => getAlbums(page))

  return (
    <div>
      {albums.items.map(album =>
        <div key={album.id}>
          <div>{album.title}</div>
        </div>
      )}
      <button onClick={() => page > 1 && setPage(page-1)}>prev</button>
      <button onClick={() => page < albums.count/10 && setPage(page+1)}>next</button>
    </div>
  )
}