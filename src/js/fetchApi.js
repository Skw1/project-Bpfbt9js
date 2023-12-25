
import axios from "axios"; 
export function fetchBreeds(){
    console.log("hello !");
    const BASE_URL= "https://food-boutique.b.goit.study/api/products/popular";

  return axios.get(BASE_URL)
  .then(response =>
    {
      return response.data
  }
    )
      .catch(error => {
      // console.error(error);
      throw new Error(error);
  });
  };