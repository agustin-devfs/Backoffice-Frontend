import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const EventsForm = () => (
  <SimpleForm>
    <TextInput label="Title" source="title" />
    <TextInput label="Description" source="description" />
    <TextField source="date" />
    <TextInput label="ImageSrc" source="imageSrc" />
    <TextInput label="ImageAlt" source="imageAlt" />
  </SimpleForm>
);

export default EventsForm;
