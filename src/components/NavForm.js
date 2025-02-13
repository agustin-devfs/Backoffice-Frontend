import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const NavForm = () => (
  <SimpleForm>
    <TextInput label="Title Navigation" source="nav" />
    <TextInput label="Link to" source="linkNav" />
    <TextInput label="Icon" source="iconNav" />
  </SimpleForm>
);

export default NavForm;
