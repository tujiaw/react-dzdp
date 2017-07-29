import { STOREINFO_UPDATE } from '../constants/actionTypes'

const initData = {
  desc: '',
  img: '',
  price: 0,
  star: 0,
  subTitle: '',
  title: ''
}

export default function storeinfo(state = initData, action) {
  switch (action.type) {
    case STOREINFO_UPDATE:
      return action.data
    default:
      return state
  }
}