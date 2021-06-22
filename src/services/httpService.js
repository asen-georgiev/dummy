import axios from 'axios'

axios.interceptors.response.use(success => {
  console.log(success)
  return (success)
}, error => {
  console.log(error.response.data)
  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}
