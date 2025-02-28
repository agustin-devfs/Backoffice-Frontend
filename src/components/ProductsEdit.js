// ProductEdit.js
import React from "react";
import { Edit } from "react-admin";
import ProductForm from "./ProductForm";

const ProductsEdit = (props) => (
  <Edit {...props}>
    <ProductForm />
  </Edit>
);

export default ProductsEdit;
