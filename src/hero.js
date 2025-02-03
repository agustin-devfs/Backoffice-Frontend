// in src/Hero.js
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

const HeroList = () => (
  <List>
    <Datagrid>
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextInput label="Title" source="title" />
      <TextInput label="Text" source="text" />
      <TextInput label="ButtonL" source="ButtonL" />
      <TextInput label="ButtonR" source="ButtonR" />
    </Datagrid>
  </List>
);

export default HeroList;
