/*
setFilter(filter)
getFilter() - повертає filter
// обʼєкт filter {
    //може містити властивості:
    "keyword" : "string",
    "category" : "рядок",
    "byABC" : "true/false",
    "page" : "число",
    "limit" : "число",
    }
setCart(cart)
getCart() - повертає cart
//обʼєкт cart {
    email = "test@gmail.com",
    масив обʼєктів products = [
    {
      "productId": "640c2dd963a319ea671e383b",
      "amount": 2
    }]
    }

*/

// Simple localStorageApi to save/loade Filter and Cart

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
  saveFilter: function saveFilter(filter) {
    this._save(this._filterID, filter);
  },
  loadFilter: function loadFilter() {
    let filter = this._load(this._filterID);
    if (filter === undefined) {
      filter = {};
    }
    return filter;
  },
  saveCart: function saveCart(cart) {
    this._save(this._filterID, cart);
  },
  loadCart: function loadCart() {
    const cart = this._load(this._filterID);
    return cart;
  },
};
