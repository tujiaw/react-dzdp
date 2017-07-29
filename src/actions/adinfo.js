import { ADINFO_UPDATE } from '../constants/actionTypes'
import fetchData from '../fetch/'

export const update = (data) => {
    return {
    type: ADINFO_UPDATE,
    data
  }
}

export const getIfNeedAsync = () => {
  return (dispatch, getState) => {
    const { adinfo } = getState()
    if (adinfo.success) {
      return
    }

    fetchData.getAdData().then((res) => {
      dispatch(update(res))
    }).catch((err) => {
      console.log(err)
    })
  }
}
