import React from "react";
import { Create, SimpleForm, TextInput, SelectInput } from "react-admin";

const UserCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Name" source="name" />
      <TextInput label="Email" source="email" />
      <SelectInput
        label="Role"
        source="role"
        choices={[
          { id: "user", name: "User" },
          { id: "admin", name: "Admin" },
        ]}
      />
    </SimpleForm>
  </Create>
);

export default UserCreate;
