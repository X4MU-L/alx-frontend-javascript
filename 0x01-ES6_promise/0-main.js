import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
handleResponseFromAPI(promise);
const promis = Promise.reject();
handleResponseFromAPI(promis);
