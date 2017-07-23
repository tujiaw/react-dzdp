import { get } from './get'
import { HOST } from '../config'

export function getAdData() {
  const result = get(HOST + '/api/homead')
  return result;
}

export function getListData(city, page) {
  return get(HOST + '/api/recommend/' + encodeURIComponent(city) + '/' + page)
}
