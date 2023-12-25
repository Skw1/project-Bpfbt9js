import axios from "axios";


export class FetchProducts {
  BASE_URL = 'https://food-boutique.b.goit.study/api';
  page = 1;
  perPage = 9;
  query = null;
  inputQuery = null;

  async getProducts() {

    const params = new URLSearchParams({
      page: this.page,
      limit: this.perPage,
    });

    try {
      const resp = await axios(`${this.BASE_URL}/products?${params}`)
      return await resp.data;
    } catch (err) {
      window.alert("Oops. Something were wrong")
    }
  }
};
  

