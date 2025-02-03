// components/UserList.js
import React from "react";
import { List, Datagrid, TextField, EmailField, DeleteButton } from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="role" />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default UserList;
