import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const HeroForm = () => (
  <SimpleForm>
    <TextInput label="Title" source="title" />
    <TextInput label="Text" source="text" />
    <TextInput label="ButtonL" source="ButtonL" />
    <TextInput label="ButtonR" source="ButtonR" />
  </SimpleForm>
);

export default HeroForm;
