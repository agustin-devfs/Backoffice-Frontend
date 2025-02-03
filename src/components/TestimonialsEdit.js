import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const TestimonialsEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Author" source="author" />
      <TextInput label="Quote" source="quote" />
      <TextInput label="Position" source="position" />
    </SimpleForm>
  </Edit>
);

export default TestimonialsEdit;
