import { SEARCHINFO_UPDATE } from '../constants/actionTypes'

const initData = {
  isFetching: false,
  list: []
}

export default function searchinfo(state = initData, action) {
    switch (action.type) {
        case SEARCHINFO_UPDATE:
            return {
              isFetching: false,
              list: action.data.list
            }
        default:
            return state
    }
}
