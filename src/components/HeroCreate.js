import React from "react";
import { Create, SimpleForm, TextInput } from "react-admin";

const HeroCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput label="Title Hero" source="titleHero" />
      <TextInput label="Text Hero" source="textHero" />
      <TextInput label="Button Left" source="buttonL" />
      <TextInput label="Button Rigth" source="buttonR" />
    </SimpleForm> 
  </Create>
);

export default HeroCreate;
