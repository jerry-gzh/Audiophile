//import { useState, useEffect } from "react";
import axios from "axios";

/* export function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const url =
        "https://react-fb-auth-29035-default-rtdb.firebaseio.com/products.json";
      const result = await axios.get(url);
    
      setProducts(result.data);
    };
    getProducts();
  },[]);

  console.log(products);
  return(
    <div>
      <h1> Catálogo de productos</h1>
        <ul>
          {products.map((prod, i) => {
            return(
              <li key={i}>
                <h4>Modelo : {prod.Model}</h4>
                <h4>Marca : {prod.Brand}</h4>
              </li>
            )
          })}
        </ul>
    </div>
  )
}
 */

const allProducts = async (state) => {
  const request = await axios.get ('https://react-fb-auth-29035-default-rtdb.firebaseio.com/products.json')
  state(request.data)
  //console.log(request.data)
}

export {
  allProducts
}