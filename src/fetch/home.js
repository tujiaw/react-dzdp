import { get } from './get'
import { HOST } from '../config'

export function getAdData() {
  const result = get(HOST + '/api/homead')
  return result;
}

export function getRecommendList(city, page) {
  console.log('getRecommendList city:' + city + ', page:' + page )
  //return get(HOST + '/api/recommend/' + encodeURIComponent(city) + '/' + page)
  return get(HOST + '/api/recommend')
}
