import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const CardsForm = () => (
  <SimpleForm>
    <TextInput label="Title" source="title" />
    <TextInput label="Description" source="description" />
    <TextInput label="ImageSrc" source="imageSrc" />
    <TextInput label="ImageAlt" source="imageAlt" />
  </SimpleForm>
);

export default CardsForm;
