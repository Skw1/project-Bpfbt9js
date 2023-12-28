/*
 Simple localStorageApi to save/loade Filter and Cart


using example:

import localStorageApi from './js/localStorageApi.js';

localStorageApi.saveFilter({ keyA: 'A', KeyB: 'B' });
const test = localStorageApi.loadFilter();
console.log('test: ', test);

methods:

localStorageApi.saveFilter(filter) - saves filter
    all properties of filter are optional:
    filter {
        keyword : "string",
        category : "string",
        byABC : "boolean",
        page : "number",
        limit : "number",}

localStorageApi.loadFilter() - returns filter

localStorageApi.deleteFilter() - removes filter from storage

localStorageApi.saveCart(cart) - saves cart
  cart {
    "email": "test@gmail.com",
    "products": [{"productId": "640c2dd963a319ea671e383b",
    "amount": 2},...]}

localStorageApi.loadCart() - returns cart

localStorageApi.deleteCart() - removes cart from storage




*/

import { refreshIcons } from './discount';

export default {
  _filterID: 'filter-project-Bpfbt9js',
  _cartID: 'cart-project-Bpfbt9js',
  _save: function _save(key, data) {
    try {
      const jsonData = JSON.stringify(data);
      localStorage.setItem(key, jsonData);
    } catch (error) {
      throw error;
    }
  },
  _load: function _load(key) {
    try {
      const jsonData = localStorage.getItem(key);
      if (jsonData === null) {
        return {};
      } else {
        const data = JSON.parse(jsonData);
        return data;
      }
    } catch (error) {
      throw error;
    }
  },
  _delete: function _delete(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      throw error;
    }
  },
  saveFilter: function saveFilter(filter) {
    this._save(this._filterID, filter);
  },
  loadFilter: function loadFilter() {
    let filter = this._load(this._filterID);
    return filter;
  },
  deleteFilter: function deleteFilter() {
    this._delete(this._filterID);
  },
  saveCart: function saveCart(cart) {
    this._save(this._cartID, cart);
    refreshIcons('discountIcon');
  },
  loadCart: function loadCart() {
    let cart = this._load(this._cartID);
    return cart;
  },
  deleteCart: function deleteCart() {
    this._delete(this._cartID);
  },
};
