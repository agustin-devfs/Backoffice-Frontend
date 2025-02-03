const dataProvider = {
  getList: async (resource, params) => {
    const response = await fetch(`http://localhost:5000/api/${resource}`);
    const json = await response.json();
    const data = json.data || [];

    return {
      data: data.map((item) => ({ id: item._id, ...item })),
      total: json.total || data.length,
    };
  },
  getMany: async (resource, params) => {
    const response = await fetch(`http://localhost:5000/api/${resource}`);
    const json = await response.json();
    const data = json.data || [];

    return {
      data: data.map((item) => ({ id: item._id, ...item })),
    };
  },
  getOne: async (resource, params) => {
    const response = await fetch(
      `http://localhost:5000/api/${resource}/${params.id}`
    );
    const json = await response.json();
    return {
      data: { id: json.id, ...json },
    };
  },

  create: async (resource, params) => {
    const response = await fetch(`http://localhost:5000/api/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params.data),
    });

    const json = await response.json();
    console.log("Response JSON:", json);

    if (!json.data || !json.data.id) {
      throw new Error("Invalid response format: Missing 'data' or 'id'");
    }

    return {
      data: { id: json.data.id, ...json.data },
    };
  },

  update: async (resource, params) => {
    const response = await fetch(
      `http://localhost:5000/api/${resource}/${params.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params.data),
      }
    );
    const json = await response.json();
    return {
      data: { id: json.data.id, ...json.data },
    };
  },
  delete: async (resource, params) => {
    const response = await fetch(
      `http://localhost:5000/api/${resource}/${params.id}`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Error deleting user");
    }
    const json = await response.json();
    return { data: json.data };
  },
  deleteMany: async (resource, params) => {
    const response = await fetch(
      `http://localhost:5000/api/${resource}/bulk-delete`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ids: params.ids }),
      }
    );
    if (!response.ok) {
      throw new Error("Error deleting multiple items");
    }
    const json = await response.json();
    return { data: params.ids };
  },
};

export default dataProvider;
