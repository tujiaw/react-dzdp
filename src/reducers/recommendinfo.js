import { RECOMMENDINFO_UPDATE, RECOMMENDINFO_ADD } from '../constants/actionTypes'

const initData = {
  hasMore: false,
  list: []
}

export default function recommendinfo(state = initData, action) {
    switch (action.type) {
        case RECOMMENDINFO_UPDATE:
            return action.data
        case RECOMMENDINFO_ADD:
            // fixme 测试
            if (state.list.length > 20) {
                return {
                    hasMore: false,
                    list: state.list
                }
            }
            return {
                hasMore: action.data.hasMore,
                list: state.list.concat(action.data.list)
            }
        default:
            return state
    }
}

