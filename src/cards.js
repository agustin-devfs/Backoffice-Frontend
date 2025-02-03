// in src/cards.js
import { List, Datagrid, TextField, ReferenceField } from "react-admin";

const CardsList = () => (
  <List>
    <Datagrid>
      <ReferenceField source="userId" reference="users" />
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="description" />
      <TextField label="ImageSrc" source="imageSrc" />
      <TextField label="ImageAlt" source="imageAlt" />
    </Datagrid>
  </List>
);

export default CardsList;
