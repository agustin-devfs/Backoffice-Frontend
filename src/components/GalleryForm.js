// GalleryForm.js
import React from "react";
import { SimpleForm, TextInput, ImageInput, ImageField } from "react-admin";

const GalleryForm = (props) => (
  <SimpleForm {...props}>
    {/* Campo para seleccionar la imagen; el backend espera el campo "imagen" */}
    <ImageInput source="imagen" label="Subir imagen" accept="image/*">
      <ImageField source="src" title="title" />
    </ImageInput>
    {/* Campo para el texto alternativo */}
    <TextInput label="Alt" source="alt" />
  </SimpleForm>
);

export default GalleryForm;
