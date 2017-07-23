import { ADINFO_UPDATE } from '../constants/actionTypes'

export const update = (data) => {
    return {
    type: ADINFO_UPDATE,
    data
  }
}