import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const TestimonialsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Author" source="author" />
      <TextInput label="Quote" source="quote" />
      <TextInput label="Position" source="position" />
    </SimpleForm>
  </Create>
);

export default TestimonialsCreate;
