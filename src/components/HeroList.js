// components/HeroList.js
import React from "react";
import { List, Datagrid, TextField, DeleteButton } from "react-admin";

const HeroList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField label="TitleHero" source="titleHero" />
      <TextField label="TextHero" source="textHero" />
      <TextField label="ButtonL" source="buttonL" />
      <TextField label="ButtonR" source="buttonR" />
      <DeleteButton label="Delete" />
    </Datagrid>
  </List>
);

export default HeroList;
