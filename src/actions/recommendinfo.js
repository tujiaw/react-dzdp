import { RECOMMENDINFO_UPDATE } from '../constants/actionTypes'

export const update = (data) => {
  return {
    type: RECOMMENDINFO_UPDATE,
    data
  }
}
