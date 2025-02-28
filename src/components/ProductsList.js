// ProductList.js
import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  ArrayField,
  SingleFieldList,
  ImageField,
} from "react-admin";

const ProductsList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField label="Title" source="title" />
      <TextField label="Description" source="description" />
      <TextField label="Code" source="code" />
      <TextField label="Price" source="price" />
      <TextField label="Status" source="status" />
      <TextField label="Stock" source="stock" />
      <TextField label="Category" source="category" />

      {/* Se asume que thumbnails es un array de objetos con 'src' y 'title' */}
      <ArrayField source="thumbnails" label="Thumbnails">
        <SingleFieldList>
          <ImageField source="src" title="title" />
        </SingleFieldList>
      </ArrayField>

      <DeleteButton />
    </Datagrid>
  </List>
);

export default ProductsList;
