import { combineReducers } from 'redux'
import userinfo from './userinfo'
import adinfo from './adinfo'
import recommendinfo from './recommendinfo'
import searchinfo from './searchinfo'

export default combineReducers({
    userinfo,
    adinfo,
    recommendinfo,
    searchinfo,
})