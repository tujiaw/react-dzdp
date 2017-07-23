import 'whatwg-fetch'
import 'es6-promise'

export function get(url) {
  return new Promise((resolve, reject) => {
    var result = fetch(url, {
      // credentials: 'include',
      headers: {
        'Accept': 'application/json, text/plain, */*'
      }
    })
    .then((res) => res.json())
    .then((json) => {
      return resolve(json)
    })
    .catch((error) => {
      console.error('fetch failed', error)
      return reject(error)
    })
  })
}
