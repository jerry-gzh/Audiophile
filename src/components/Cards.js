import React, {  useContext } from "react";
import { Card } from "./Card";
//import { allProducts } from "../services/getProducts";
import { ItemContext } from "../context/itemContext";

import './cards.css';

const Cards = () => {
/*   const [products, setProducts] = useState(null);

  useEffect(() => {
    allProducts(setProducts);
  }, []); */

  const {products} = useContext(ItemContext)

  return (
    <>
      {products != null ? (
        <div className="container d-flex justify-content-center align-items-center h-100 bg-info">
          <div className="row">
            {products.map(({id, Model, Brand, Img_link }) => (
              <div className="col-md-4" key={id}>
                <Card Model={Model} Brand={Brand} Img={Img_link} id={id}/>
              </div>
            ))}
          </div>
        </div>
      ) : (
        "No hay productos 😥"
      )}
    </>
  );
};

export default Cards;
