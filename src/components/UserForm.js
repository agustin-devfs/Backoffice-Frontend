import React from 'react';
import { SimpleForm, TextInput, SelectInput } from 'react-admin';

const UserForm = () => (
  <SimpleForm>
    <TextInput label="Name" source="name" />
    <TextInput label="Email" source="email" />
    <SelectInput
      label="Role"
      source="role"
      choices={[
        { id: 'user', name: 'User' },
        { id: 'admin', name: 'Admin' },
      ]}
    />
  </SimpleForm>
);

export default UserForm;
