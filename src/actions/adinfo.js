import { ADINFO_UPDATE } from '../constants/actionTypes'

export function update(data) {
  return {
    type: ADINFO_UPDATE,
    data
  }
}