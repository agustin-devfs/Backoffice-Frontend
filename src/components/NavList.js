// in src/Nav.js
import { List, Datagrid, TextField, DeleteButton } from "react-admin";

const NavList = (props) => (
  <List {...props}>
    <Datagrid>
      {/*       <ReferenceField source="userId" reference="users" />
       */}
      {/*       <TextField source="id" />
       */}{" "}
      <TextField label="Title Navigation" source="nav" />
      <TextField label="Link to" source="linkNav" />
      <TextField label="Icon" source="iconNav" />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default NavList;
