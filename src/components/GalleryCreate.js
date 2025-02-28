// GalleryCreate.js
import React from "react";
import { Create } from "react-admin";
import GalleryForm from "./GalleryForm";

const GallerysCreate = (props) => (
  <Create {...props}>
    <GalleryForm />
  </Create>
);

export default GallerysCreate;
