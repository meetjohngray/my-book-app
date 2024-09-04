import request from 'superagent'
import { Book } from '../../models/books'

const rootUrl = '/api/v1'

export async function getBooks(): Promise<Book[]> {
  const response = await request.get(rootUrl + '/books')
  return response.body
}
