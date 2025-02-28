const API_URL = "http://localhost:5000/api";

// Función para convertir datos en FormData
const convertDataToFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    if (key === "thumbnails" && Array.isArray(data[key])) {
      // Convertimos cada thumbnail a su path o src
      data[key].forEach((thumbnail, index) => {
        formData.append(`${key}[${index}]`, thumbnail.rawFile?.path || thumbnail.src);
      });
    } else if (data[key] instanceof File || data[key]?.rawFile) {
      formData.append(key, data[key]?.rawFile || data[key]);
    } else if (Array.isArray(data[key])) {
      data[key].forEach((item, index) => {
        formData.append(`${key}[${index}]`, item);
      });
    } else if (data[key] !== undefined) {
      formData.append(key, data[key]);
    }
  });

  return formData;
};

const dataProvider = {
  getList: async (resource) => {
    const response = await fetch(`${API_URL}/${resource}`);
    if (!response.ok) throw new Error("Error fetching list");
    const json = await response.json();
    return {
      data: json.data.map((item) => ({ id: item._id || item.id, ...item })),
      total: json.total || json.data.length,
    };
  },

  getOne: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`);
    if (!response.ok) throw new Error("Error fetching item");
    const json = await response.json();
    return { data: { id: json._id || json.id, ...json } };
  },

  create: async (resource, params) => {
    if (!params?.data) {
      throw new Error("No data provided in params.");
    }

    // Si es gallery, usamos el campo "imagen", de lo contrario "image"
    const isFileUpload =
      resource === "gallery"
        ? params.data.imagen?.rawFile
        : params.data.image?.rawFile;

    const body = isFileUpload
      ? convertDataToFormData(params.data)
      : JSON.stringify(params.data);

    const response = await fetch(`${API_URL}/${resource}`, {
      method: "POST",
      headers: isFileUpload ? undefined : { "Content-Type": "application/json" },
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error creating resource: ${errorText}`);
    }

    const json = await response.json();
    return { data: { id: json.data._id || json.data.id, ...json.data } };
  },

  update: async (resource, params) => {
    // Si es gallery, usamos el campo "imagen", de lo contrario "image"
    const isFileUpload =
      resource === "gallery"
        ? params.data.imagen?.rawFile
        : params.data.image?.rawFile;

    const body = isFileUpload
      ? convertDataToFormData(params.data)
      : JSON.stringify(params.data);

    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: "PUT",
      headers: isFileUpload ? undefined : { "Content-Type": "application/json" },
      body,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error updating resource: ${errorText}`);
    }

    const json = await response.json();
    return { data: { id: json.data._id || json.data.id, ...json.data } };
  },

  delete: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/${params.id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error deleting resource: ${errorText}`);
    }

    return { data: { id: params.id } };
  },

  deleteMany: async (resource, params) => {
    const response = await fetch(`${API_URL}/${resource}/bulk-delete`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ids: params.ids }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error deleting multiple items: ${errorText}`);
    }

    return { data: params.ids };
  },
};

export default dataProvider;

