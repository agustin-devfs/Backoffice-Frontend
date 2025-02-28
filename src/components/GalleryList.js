// GalleryList.js
import React from "react";
import { List, Datagrid, TextField, ImageField } from "react-admin";

const GalleryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" label="ID" />
      <ImageField source="imageSrc" label="Imagen" />
      <TextField source="alt" label="Texto Alternativo" />
    </Datagrid>
  </List>
);

export default GalleryList;
