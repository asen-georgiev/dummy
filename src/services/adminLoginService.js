import httpService from './httpService'
import {apiUrl} from '../config.json'

const apiEndPoint = apiUrl + '/adminauthent'

export function adminLogin (data) {
  return httpService
    .post(apiEndPoint, data)
    .then(response => {
      if (response.data) {
        sessionStorage.setItem('admin', response.data)
      }
      return response.data
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

export function adminLogout () {
  sessionStorage.removeItem('admin')
}

export function getLoggedAdmin () {
  return sessionStorage.getItem('admin')
}
