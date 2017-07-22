import { USERINFO_UPDATE } from '../constants/actionTypes'

export function update(data) {
  return {
    type: USERINFO_UPDATE,
    data
  }
}