import { COMMENTINFO_UPDATE } from '../constants/actionTypes'
import fetchData from '../fetch'

export const update = (data) => {
  return {
    type: COMMENTINFO_UPDATE,
    data
  }
}

export const getCommentInfo = (page, id) => {
  return (dispatch, getState) => {
    fetchData.getCommentInfo(page, id).then(res => {
      console.log(res)
      if (res.success) {
        dispatch(update(res.data))
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}