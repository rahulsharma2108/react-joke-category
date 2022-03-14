export const makeGetCall = (url, callbackFn, errorCallback) => {
  fetch(url)
    .then((data) => data.json())
    .then(callbackFn)
    .catch(errorCallback);
};
