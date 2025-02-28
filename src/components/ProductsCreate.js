// ProductCreate.js
import React from "react";
import { Create } from "react-admin";
import ProductForm from "./ProductForm";

const ProductsCreate = (props) => (
  <Create {...props}>
    <ProductForm />
  </Create>
);

export default ProductsCreate;
