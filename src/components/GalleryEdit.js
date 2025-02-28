// GalleryEdit.js
import React from "react";
import { Edit } from "react-admin";
import GalleryForm from "./GalleryForm";

const GallerysEdit = (props) => (
  <Edit {...props}>
    <GalleryForm />
  </Edit>
);

export default GallerysEdit;
