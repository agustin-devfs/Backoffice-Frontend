import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const HeroForm = () => (
  <SimpleForm>
    <TextInput label="TitleHero" source="titleHero" />
    <TextInput label="TextHero" source="textHero" />
    <TextInput label="ButtonL" source="buttonL" />
    <TextInput label="ButtonR" source="buttonR" />
  </SimpleForm>
);

export default HeroForm;
