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

export function updateUser (user, userId) {
  const body = {...user}
  return httpService
    .put(userUrl(userId), body, {
      headers: {
        'x-auth-token': getLoggedUser()
      }
    })
    .then(response => {
      if (response.data) {
        localStorage.setItem('user', response.data)
      }
    })
    .catch(error => {
      return Promise.reject(error)
    })
}

export function deleteUser (userId) {
  return httpService
    .delete(userUrl(userId), {
      headers: {
        'x-auth-token': getLoggedUser()
      }
    })
}

export function getUser (userId) {
  return httpService
    .get(userUrl(userId), {
      headers: {
        'x-auth-token': getLoggedUser()
      }
    })
}
