// components/HeroList.js
import React from "react";
import { List, Datagrid, TextInput, DeleteButton } from "react-admin";

const HeroList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextInput label="Title" source="title" />
      <TextInput label="Text" source="text" />
      <TextInput label="ButtonL" source="ButtonL" />
      <TextInput label="ButtonR" source="ButtonR" />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default HeroList;
