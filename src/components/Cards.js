import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { allProducts } from "../services/getProducts";

const Cards = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    allProducts(setProducts);
  }, []);

  return (
    <>
      {products != null ? (
        <div className="container d-flex justify-content-center align-items-center h-100">
          <div className="row">
            {products.map(({id, Model, Brand, Img_link }) => (
              <div className="col-md-4" key={id}>
                <Card Model={Model} Brand={Brand} Img={Img_link}/>
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
