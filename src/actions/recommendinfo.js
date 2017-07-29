import { RECOMMENDINFO_UPDATE, RECOMMENDINFO_ADD } from '../constants/actionTypes'
import fetchData from '../fetch'

export const update = (data) => {
  return {
    type: RECOMMENDINFO_UPDATE,
    data
  }
}

export const add = (data) => {
  return {
    type: RECOMMENDINFO_ADD,
    data
  }
}

export const getInitDataIfNeedAsync = (city) => {
  return (dispatch, getState) => {
    const { recommendinfo } = getState()
    if (recommendinfo.isFetching || recommendinfo.list.length) {
      return
    }

    let newRecommendinfo = { ...recommendinfo }
    newRecommendinfo.isFetching = true
    dispatch(update(newRecommendinfo))
    fetchData.getRecommendList(city, 0).then(json => {
      if (json.success) {
        dispatch(update(json.data))
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}

export const getMoreDataIfNeedAsync = (city) => {
  return (dispatch, getState) => {
    const { recommendinfo } = getState()
    if (recommendinfo.isFetching || !recommendinfo.hasMore) {
      return
    }

    let newRecommendinfo = { ...recommendinfo }
    newRecommendinfo.isFetching = true
    dispatch(update(newRecommendinfo))
    fetchData.getRecommendList(city, newRecommendinfo.currentPage + 1).then(json => {
      if (json.success) {
        dispatch(add(json.data))
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
