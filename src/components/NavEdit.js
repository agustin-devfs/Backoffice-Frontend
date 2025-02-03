import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const NavEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Title Navigation" source="nav" />
      <TextInput label="Link to" source="linkNav" />
    </SimpleForm>
  </Edit>
);

export default NavEdit;
