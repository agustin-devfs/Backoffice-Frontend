import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const TestimonialsForm = () => (
  <SimpleForm>
    <TextInput label="Author" source="author" />
    <TextInput label="Quote" source="quote" />
    <TextInput label="Position" source="position" />
  </SimpleForm>
);

export default TestimonialsForm;
