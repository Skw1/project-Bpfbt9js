

import axios from 'axios';

export default {
  _baseURL: 'https://food-boutique.b.goit.study/api',
  _categoriesURL: '/products/categories',
  _productsURL: '/products',
  _popularURL: '/products/popular',
  _discountURL: '/products/discount',
  _subscriptionURL: '/subscription',
  _orderURL: '/orders',

  categories: async function categories() {
    try {
      const result = await axios.get(this._baseURL + this._categoriesURL);
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  popular: async function popular() {
    try {
      const result = await axios.get(this._baseURL + this._popularURL);
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  discount: async function discount() {
    try {
      const result = await axios.get(this._baseURL + this._discountURL);
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  product: async function product(id) {
    try {
      const result = await axios.get(
        this._baseURL + this._productsURL + `/${id}`
      );
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  products: async function products(filter = {}) {
    try {
      const params = {
        params: filter,
      };
      const result = await axios.get(this._baseURL + this._productsURL, params);
      return result.data;
    } catch (error) {
      throw error;
    }
  },

  subscribe: async function subscribe(email) {
    try {
      const params = {
        email: email,
      };
      const result = await axios.post(
        this._baseURL + this._subscriptionURL,
        params
      );
      return result;
    } catch (error) {
      throw error;
    }
  },

  order: async function order(cart) {
    try {
      const result = await axios.post(this._baseURL + this._orderURL, cart);
      return result.data;
    } catch (error) {
      throw error;
    }
  },
};
