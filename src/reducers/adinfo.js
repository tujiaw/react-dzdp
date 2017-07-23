import { ADINFO_UPDATE } from '../constants/actionTypes'

const initData = {
  success: false,
  data: {}
}

export default function adinfo(state = initData, action) {
    switch (action.type) {
        case ADINFO_UPDATE:
            return action.data
        default:
            return state
    }
}
