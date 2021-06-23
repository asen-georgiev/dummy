import httpService from './httpService'
import {apiUrl} from '../config.json'
import {getLoggedUser} from './userLoginService'

const apiEndPoint = apiUrl + '/users'

function userUrl (userId) {
  return `${apiEndPoint}/${userId}`
}

export function registerUser (user) {
  return httpService
    .post(apiEndPoint, user)
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
