import { USERINFO_UPDATE } from '../constants/actionTypes'
import localStore from '../utils/localStore'
import { CITY_NAME } from '../constants/otherTypes'

const initData = {
    cityName: ''
}
export default function userinfo(state = initData, action) {
    switch (action.type) {
        case USERINFO_UPDATE:
            localStore.setItem(CITY_NAME, action.data.cityName)
            return action.data
        default:
            // 设置默认城市
            if (!state.cityName.length) {
                let cityName = localStore.getItem(CITY_NAME)
                if (cityName == null) {
                    cityName = '上海'
                }
                return Object.assign({}, state, { cityName: cityName })
            }
            return state
    }
}