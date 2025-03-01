// in src/cards.js
import { List, Datagrid, TextField, DeleteButton } from "react-admin";

const CardsList = (props) => (
  <List {...props}>
    <Datagrid>
{/*       <ReferenceField source="userId" reference="users" />
 */}{/*       <TextField source="id" />
 */}      <TextField source="title" />
      <TextField source="description" />
      <TextField label="ImageSrc" source="imageSrc" />
      <TextField label="ImageAlt" source="imageAlt" />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default CardsList;
