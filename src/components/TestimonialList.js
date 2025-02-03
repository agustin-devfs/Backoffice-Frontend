// in src/Testimonials.js
import { List, Datagrid, TextField, ReferenceField,DeleteButton } from "react-admin";

const TestimonialsList = () => (
  <List>
    <Datagrid>
   {/*    <ReferenceField source="userId" reference="users" />
      <TextField source="id" /> */}
      <TextField source="author" />
      <TextField source="quote" />
      <TextField source="position" />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default TestimonialsList;
