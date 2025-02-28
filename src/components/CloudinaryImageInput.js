// CloudinaryImageInput.js
import React, { useState } from "react";
import { useInput, FieldTitle } from "react-admin";

const CloudinaryImageInput = (props) => {
    const {
        input: { value = [], onChange } = { value: [], onChange: () => {} },
        meta: { touched, error } = {},
        label,
        source,
      } = useInput(props);

  const openWidget = () => {
    const widget = window.cloudinary.createUploadWidget(
      {

        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        uploadPreset: "Assets",
        multiple: true,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // Actualiza el valor con la URL y demás info
          const newImage = {
            src: result.info.secure_url,
            title: result.info.original_filename,
          };
          // Si permites múltiples imágenes, asegúrate de concatenar o asignar como array
          onChange([...(value || []), newImage]);
        }
      }
    );
    widget.open();
  };

  return (
    <div>
      <FieldTitle label={label} source={source} />
      <button type="button" onClick={openWidget}>
        Subir Imagen
      </button>
      {touched && error && <span>{error}</span>}
      <div style={{ marginTop: "1em", display: "flex", flexWrap: "wrap" }}>
        {value &&
          value.map((file, index) => (
            <img
              key={index}
              src={file.src}
              alt={file.title}
              style={{ width: "100px", marginRight: "10px" }}
            />
          ))}
      </div>
    </div>
  );
};

export default CloudinaryImageInput;
