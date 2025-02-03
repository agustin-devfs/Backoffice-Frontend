import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const CardsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Title" source="title" />
      <TextInput label="Description" source="description" />
      <TextInput label="ImageSrc" source="imageSrc" />
      <TextInput label="ImageAlt" source="imageAlt" />
    </SimpleForm>
  </Edit>
);

export default CardsEdit;
