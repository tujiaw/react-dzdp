import { COMMENTINFO_UPDATE } from '../constants/actionTypes'

const initData = {
  hasMore: false,
  list: []
}

export default function commentinfo(state = initData, action) {
  switch (action.type) {
    case COMMENTINFO_UPDATE:
      return action.data
    default:
      return state
  }
}