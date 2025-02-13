import React from "react";
import { Create, SimpleForm, TextInput, NumberInput, SelectInput, ImageInput, ImageField } from "react-admin";

const ProductsCreate = (props) => (
  <Create {...props}>
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

      {/* Input para subir imágenes */}
      <ImageInput source="thumbnails" label="Upload Images" multiple={true} accept="image/*">
        <ImageField source="src" title="title" />
      </ImageInput>

    </SimpleForm>
  </Create>
);

export default ProductsCreate;
