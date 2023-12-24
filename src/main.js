import localStorageApi from './js/localStorageApi.js';

localStorageApi.saveFilter({ keyA: 'A', KeyB: 'B' });
const test = localStorageApi.loadFilter();
console.log('test: ', test);
