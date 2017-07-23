import { RECOMMENDINFO_UPDATE } from '../constants/actionTypes'

const initData = {
  hasMore: false,
  list: []
}

export default function recommendinfo(state = initData, action) {
    switch (action.type) {
        case RECOMMENDINFO_UPDATE:
            return action.data
        default:
            return state
    }
}
