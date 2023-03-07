import React, { useState, useEffect } from "react";
import CardItem from "./CardItem";
import { useParams } from "react-router-dom";
import CardItemJson from "/src/data/products.json";


const ProductListPage= () =>  {
  const {categoryId} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    debugger
    console.log(CardItemJson)
    const filteredProducts = CardItemJson.filter(
   (product) => product.categoryId === categoryId
  ); 
    setProducts(filteredProducts);
  }, []);

 

  return (
    <div> hola
      {products.map((product) => (
        <div key={product.id}>
          { <CardItem product={product}/>}
        </div>
      ))}
    </div>
  );
}

export default ProductListPage;