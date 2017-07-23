import { combineReducers } from 'redux'
import userinfo from './userinfo'
import adinfo from './adinfo'

export default combineReducers({
    userinfo,
    adinfo,
})