// ProductForm.js
import React from "react";
import { SimpleForm, TextInput, NumberInput, SelectInput } from "react-admin";
import CloudinaryImageInput from "./CloudinaryImageInput";

const ProductForm = (props) => (
  <SimpleForm {...props}>
    <TextInput label="Title" source="title" />
    <TextInput label="Description" source="description" multiline />
    <TextInput label="Code" source="code" />
    <NumberInput label="Price" source="price" />
    <SelectInput
      label="Status"
      source="status"
      choices={[
        { id: "available", name: "Available" },
        { id: "unavailable", name: "Unavailable" },
      ]}
    />
    <NumberInput label="Stock" source="stock" />
    <TextInput label="Category" source="category" />

    <CloudinaryImageInput source="thumbnails" label="Upload Images" />
  </SimpleForm>
);

export default ProductForm;
