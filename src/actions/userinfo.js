import { USERINFO_UPDATE } from '../constants/actionTypes'

export const update = (data) => {
  return {
    type: USERINFO_UPDATE,
    data
  }
}