import request from 'superagent'
import { Book } from '../../models/books'

const rootUrl = '/api/v1'

export async function getBooks(): Promise<Book[]> {
  const response = await request.get(rootUrl + '/books')
  return response.body
}

export interface SortAndFilterCriteria {
  sortBy: string
  genre?: string
  minRating?: number
  publicationYear?: number
}

export async function sortAndFilterBooks(criteria: SortAndFilterCriteria): Promise<Book[]> {
  const response = await request.get(rootUrl + '/books')
    .query(criteria)
  return response.body
}
