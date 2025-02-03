import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const HeroCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Title" source="title" />
      <TextInput label="Text" source="text" />
      <TextInput label="ButtonL" source="ButtonL" />
      <TextInput label="ButtonR" source="ButtonR" />
    </SimpleForm>
  </Create>
);

export default HeroCreate;
