import axios from 'axios'

export default function (options) {
  if (options.contentType) {
    if (options.headers) {
      options.headers['Content-Type'] = options.contentType
    } else {
      options.headers = {
        'Content-Type': options.contentType
      }
    }
  }
  return axios(options)
}
