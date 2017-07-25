import { ADINFO_UPDATE } from '../constants/actionTypes'
import { getAdData } from '../fetch/home'

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

    getAdData().then((res) => {
      dispatch(update(res))
    })
  }
}
