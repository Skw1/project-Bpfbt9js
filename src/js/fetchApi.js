export function fetchCategories() {
  const CATEGORY_URL = 'https://food-boutique.b.goit.study/api/products/categories';
  
  return fetch(`${CATEGORY_URL}`)
    .then(resp => {
      if (!resp.ok) {
      throw new Error(resp.statusText)
      }
      return resp.json()
  })
};

export class FetchProducts {
  BASE_URL = 'https://food-boutique.b.goit.study/api/products';
  page = 1;
  perPage = 9;
  query = null;

  getProducts() {

    const params = new URLSearchParams({
      page: this.page,
      limit: this.perPage,
     
    });

    return fetch(`${this.BASE_URL}?${params}`)
      .then(resp => {
      if (!resp.ok) {
      throw new Error(resp.statusText)
      }
      return resp.json();
    })
  } 

  getProductsByCategory() {
    const params = new URLSearchParams({
      page: this.page,
      limit: this.perPage,
      category: this.query,
    });

    return fetch(`${this.BASE_URL}?${params}`)
      .then(resp => {
        
      if (!resp.ok) {
      throw new Error(resp.statusText)
      }
      return resp.json();
    })
  }
  
}
