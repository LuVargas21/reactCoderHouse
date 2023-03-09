import React, { useState } from "react";
import ProductDetail from "./ProductDetail";
import ProductDetailJson from "/src/data/products.json";

const ProductDetailContainer = () => {
let products = ProductDetailJson;

  return (
    <div>
      <ProductDetail/>
    </div>
  )
}

export default ProductDetailContainer
