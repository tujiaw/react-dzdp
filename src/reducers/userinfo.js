import { USERINFO_UPDATE } from '../constants/actionTypes'

export default function userinfo(state = {}, action) {
    switch (action.type) {
        case USERINFO_UPDATE:
            return action.data
        default:
            return state
    }
}