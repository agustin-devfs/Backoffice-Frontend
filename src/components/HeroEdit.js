import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const HeroEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput label="Title Hero" source="titleHero" />
      <TextInput label="Text Hero" source="textHero" />
      <TextInput label="Button Left" source="buttonL" />
      <TextInput label="Button Rigth" source="buttonR" />
    </SimpleForm>
  </Edit>
);

export default HeroEdit;
