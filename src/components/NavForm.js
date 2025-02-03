import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const NavForm = () => (
  <SimpleForm>
     <TextInput label="Title" source="nav" />
      <TextInput label="Link" source="linkNav" />
  </SimpleForm>
);

export default NavForm;
