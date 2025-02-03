import React from "react";
import { List, Datagrid, TextField, DeleteButton } from "react-admin";

const ProductsList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField label="Title" source="title" />
      <TextField label="Description" source="description" />
      <TextField label="Code" source="code" />
      <TextField label="Price" source="price" />
      <TextField label="Status" source="status" />
      <TextField label="Stock" source="stock" />
      <TextField label="Category" source="category" />
      <TextField label="Thumbnails" source="thumbnails" />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default ProductsList;
