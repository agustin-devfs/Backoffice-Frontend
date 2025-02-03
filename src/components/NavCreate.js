import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const NavsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Title Navigation" source="nav" />
      <TextInput label="Link to" source="linkNav" />
    </SimpleForm>
  </Create>
);

export default NavsCreate;
