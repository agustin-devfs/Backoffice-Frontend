import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const NavsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Title" source="nav" />
      <TextInput label="Link" source="linkNav" />
    </SimpleForm>
  </Create>
);

export default NavsCreate;
