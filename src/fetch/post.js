
function obj2params(obj) {
  let result = ''
  for (let key in obj) {
    result += '&' + key + '=' + encodeURIComponent(obj[key])
  }
  if (result.length) {
    result = result.slice(1)
  }
  return result
}

export function post(url, paramsObj) {
  const result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: obj2params(paramsObj)
  })
  return result
}
