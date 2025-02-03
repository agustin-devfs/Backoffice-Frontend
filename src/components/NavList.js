// in src/Nav.js
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DeleteButton,
} from "react-admin";

const NavList = (props) => (
  <List {...props}>
    <Datagrid>
      {/*       <ReferenceField source="userId" reference="users" />
       */}
      {/*       <TextField source="id" />
       */}{" "}
      <TextInput label="Title" source="nav" />
      <TextInput label="Link" source="linkNav" />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default NavList;
