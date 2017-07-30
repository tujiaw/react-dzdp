import { USERINFO_UPDATE } from '../constants/actionTypes'
import localStore from '../utils/localStore'
import { CITY_NAME } from '../constants/otherTypes'

const initData = {
    cityname: '',
    username: '',
}
export default function userinfo(state = initData, action) {
    switch (action.type) {
        case USERINFO_UPDATE:
            const newState = Object.assign({}, state, action.data)
            localStore.setItem(CITY_NAME, newState.cityname)
            return newState
        default:
            // 设置默认城市
            if (!state.cityname.length) {
                let cityname = localStore.getItem(CITY_NAME)
                if (cityname == null) {
                    cityname = '上海'
                }
                return Object.assign({}, state, { 'cityname': cityname })
            }
            return state
    }
}
