import http from '@/support/http'

export const sign = ({ username, password }) => {
  return http.post('/auth/sign', { username, password })
    .then(data => data)
    .catch(e => {
      return Promise.reject(e)
    })
}
