import { STOREINFO_UPDATE } from '../constants/actionTypes'
import fetchData from '../fetch'

export const update = (data) => {
  return {
    type: STOREINFO_UPDATE,
    data
  }
}

export const getStoreInfo = (id) => {
  return (dispatch, getState) => {
    fetchData.getStoreInfo(id).then(res => {
      console.log(res)
      if (res.success) {
        dispatch(update(res.data))
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}
