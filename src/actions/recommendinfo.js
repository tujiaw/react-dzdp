import { RECOMMENDINFO_UPDATE,  RECOMMENDINFO_ADD } from '../constants/actionTypes'

export const update = (data) => {
  return {
    type: RECOMMENDINFO_UPDATE,
    data
  }
}

export const add = (data) => {
  return {
    type: RECOMMENDINFO_ADD,
    data
  }
}