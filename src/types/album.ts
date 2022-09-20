export type Album = {
  'userId': number,
  'id': number,
  'title': string
}

export type PaginatedAlbums = {
  'items': Album[],
  'count': number
}