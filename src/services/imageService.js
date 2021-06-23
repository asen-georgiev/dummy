import httpService from './httpService'
import {apiUrl} from '../config.json'

const apiEndPoint = apiUrl + '/images'

export function uploadImage (data) {
  return httpService
    .post(apiEndPoint, data)
}
