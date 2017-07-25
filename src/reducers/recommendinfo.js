import { RECOMMENDINFO_UPDATE, RECOMMENDINFO_ADD } from '../constants/actionTypes'

const initData = {
  isFetching: false,
  currentPage: 0,

  hasMore: false,
  list: []
}

export default function recommendinfo(state = initData, action) {
    switch (action.type) {
        case RECOMMENDINFO_UPDATE:
            return {
                isFetching: false,
                currentPage: state.currentPage,
                hasMore: action.data.hasMore,
                list: action.data.list
            }
        case RECOMMENDINFO_ADD:
            return {
                isFetching: false,
                currentPage: state.currentPage + 1,
                hasMore: action.data.hasMore,
                list: state.list.concat(action.data.list)
            }
        default:
            return state
    }
}

