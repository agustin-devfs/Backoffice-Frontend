import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const CardsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Title" source="title" />
      <TextInput label="Description" source="description" />
      <TextInput label="ImageSrc" source="imageSrc" />
      <TextInput label="ImageAlt" source="imageAlt" />
    </SimpleForm>
  </Create>
);

export default CardsCreate;
