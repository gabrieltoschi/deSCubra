function admLogin(user, password, callbackFn) {
  return fetch(`/admLogin?u=${user}&p=${password}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

function expLogin(email, name, callbackFn) {
  return fetch(`/expLogin?e=${email}&n=${name}`)
  .then(checkStatus)
  .then(parseJSON)
  .then(callbackFn)
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

function parseJSON(response) {
  return response.json();
}

const Client = { admLogin, expLogin };
export default Client;