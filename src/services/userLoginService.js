import httpService from './httpService'
import {apiUrl} from '../config.json'

const apiEndPoint = apiUrl + '/userauthent'

export function userLogin (data) {
  return httpService
    .post(apiEndPoint, data)
    .then(response => {
      if (response.data) {
        localStorage.setItem('user', response.data)
      }
      return response.data
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

export function userLogout () {
  localStorage.removeItem('user')
}

export function getLoggedUser () {
  return localStorage.getItem('user')
}
