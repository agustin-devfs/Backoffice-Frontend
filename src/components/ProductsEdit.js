import React from "react";
import { Edit, SimpleForm, TextInput, NumberInput, SelectInput, ArrayInput, SimpleFormIterator } from "react-admin";

const ProductsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Title" source="title" />
      <TextInput label="Description" source="description" multiline />
      <TextInput label="Code" source="code" />
      <NumberInput label="Price" source="price" />
      <SelectInput 
        label="Status" 
        source="status" 
        choices={[
          { id: "available", name: "Available" },
          { id: "unavailable", name: "Unavailable" }
        ]}
      />
      <NumberInput label="Stock" source="stock" />
      <TextInput label="Category" source="category" />
      <ArrayInput label="Thumbnails" source="thumbnails">
        <SimpleFormIterator>
          <TextInput label="Image URL" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default ProductsEdit;
