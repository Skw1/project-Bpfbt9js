import axios from "axios";
import Notiflix from 'notiflix';

export class FetchProducts {
  BASE_URL = 'https://food-boutique.b.goit.study/api';
  page = 1;
  perPage = 9;
  query = null;
  inputQuery = null;

  async  getCategories() {
  
  try {
    const resp =await axios(`${this.BASE_URL}/products/categories`)
  return await resp.data;
  } catch (err) {
    Notiflix.Notify.failure(err)
  }
};

  async getProducts() {

    const params = new URLSearchParams({
      page: this.page,
      limit: this.perPage,
    });

    try {
      const resp = await axios(`${this.BASE_URL}/products?${params}`)
      return await resp.data;
    } catch (err) {
      Notiflix.Notify.failure(err)
    }
  }

  async getProductsByCategory() {
    const params = new URLSearchParams({
      page: this.page,
      limit: this.perPage,
      category: this.query,
    });

    try {
      const resp = await axios(`${this.BASE_URL}/products?${params}`)
      return await resp.data;
    } catch (err) {
      Notiflix.Notify.failure(err)
    }
  };

  async getProductsBySearch() {
    const params = new URLSearchParams({
      page: this.page,
      limit: this.perPage,
      keyword: this.inputQuery,
    });

    try {
      const resp = await axios(`${this.BASE_URL}/products?${params}`)
      return await resp.data;
    } catch (err) {
      Notiflix.Notify.failure(err)
    }
  }
};
  

