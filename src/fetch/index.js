import { get } from './get'
import { HOST } from '../config'

const fetchData = {
  getAdData: () => {
    const result = get(HOST + '/api/homead')
    return result;
  },

  getRecommendList: (city, page) => {
    console.log('getRecommendList city:' + city + ', page:' + page )
    //return get(HOST + '/api/recommend/' + encodeURIComponent(city) + '/' + page)
    if (city == null || page == null) {
      return Promise.reject('params error')
    }
    return get(HOST + '/api/recommend')
  },

  getSearchList: (keyword) => {
    console.log('getSearchList keyword:' + keyword)
    if (keyword == null || keyword.length === 0) {
      return Promise.reject('params error')
    }
    return get(HOST + '/api/all')
  },

  getStoreInfo: (id) => {
    console.log('getStoreInfo id:' + id)
    //return get(HOST + '/api/detail/store/' + id)
    if (id == null || id.length === 0) {
      return Promise.reject('params error')
    }
    return get(HOST + '/api/detail/store')
  },

  getCommentInfo: (page, id) => {
    console.log('getCommentInfo page:' + page + ',id:' + id)
    if (page == null || id == null || id.length === 0) {
      return Promise.reject('params error')
    }
    return get(HOST + '/api/detail/comment/' + page + '/' + id)
  }
}

export default fetchData