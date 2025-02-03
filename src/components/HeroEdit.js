import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const HeroEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Title" source="title" />
      <TextInput label="Text" source="text" />
      <TextInput label="ButtonL" source="ButtonL" />
      <TextInput label="ButtonR" source="ButtonR" />
    </SimpleForm>
  </Edit>
);

export default HeroEdit;
