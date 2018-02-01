import axios from 'axios'

export default function (options, onSuccess, onError) {
  if (options.contentType) {
    if (options.headers) {
      options.headers['Content-Type'] = options.contentType
    } else {
      options.headers = {
        'Content-Type': options.contentType
      }
    }
  }
  axios(options)
  .then((res) => {
    if (onSuccess) {
      onSuccess(res)
    }
  })
  .catch((e) => {
    if (onError) {
      onError(e)
    } else {
      console.log(e)
    }
  })
}
