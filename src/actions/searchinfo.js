import { SEARCHINFO_UPDATE } from '../constants/actionTypes'
import fetchData from '../fetch'

export const update = (data) => {
  return {
    type: SEARCHINFO_UPDATE,
    data
  }
}

export const getIfNeedAsync = (keyword) => {
  return (dispatch, getState) => {
    const { searchinfo } = getState()
    if (searchinfo.isFetching) {
      return
    }

    let newSearchinfo = { ...searchinfo }
    newSearchinfo.isFetching = true
    dispatch(update(newSearchinfo))

    fetchData.getSearchList(keyword).then((res) => {
      if (res.list == null || !(res.list instanceof Array)) {
        console.error('get search list failed,' + JSON.stringify(res))
        return
      }
      dispatch(update(res))
    }).catch((err) => {
      console.log(err)
    })
  }
}
