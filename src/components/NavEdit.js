import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const NavEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Title" source="nav" />
      <TextInput label="Link" source="linkNav" />
    </SimpleForm>
  </Edit>
);

export default NavEdit;
