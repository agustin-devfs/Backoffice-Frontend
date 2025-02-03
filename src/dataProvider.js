const dataProvider = {
    getList: async (resource, params) => {
        // Asegúrate de que 'resource' tenga el valor correcto, por ejemplo, "users"
        const response = await fetch(`http://localhost:5000/api/${resource}`);
        const json = await response.json();

        // Asegurarse de acceder a "json.data"
        const data = json.data || [];  // Usa json.data si existe, sino un array vacío.

        return {
            data: data.map(item => ({ id: item._id, ...item })), // Asegura que cada objeto tiene "id"
            total: json.total || data.length // Total se obtiene de json.total
        };
    },
   getMany: async (resource, params) => {
        const response = await fetch(`http://localhost:5000/api/${resource}`);
        const json = await response.json();

        // Accede a "json.data" si existe
        const data = json.data || [];

        return {
            data: data.map(item => ({ id: item._id, ...item }))
        };
    } ,
     
        getOne: async (resource, params) => {
          const response = await fetch(`http://localhost:5000/api/${resource}/${params.id}`);
          const json = await response.json();
          return {
            data: { id: json.id, ...json },
          };
        },
      
        create: async (resource, params) => {
          const response = await fetch(`http://localhost:5000/api/${resource}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params.data),
          });
          const json = await response.json();
          return {
            data: { id: json.data.id, ...json.data },
          };
        },
      
        update: async (resource, params) => {
          const response = await fetch(`http://localhost:5000/api/${resource}/${params.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(params.data),
          });
          const json = await response.json();
          return {
            data: { id: json.data.id, ...json.data },
          };
        },
      
        delete: async (resource, params) => {
          const response = await fetch(`http://localhost:5000/api/${resource}/${params.id}`, {
            method: "DELETE",
          });
          if (!response.ok) {
            throw new Error("Error deleting user");
          }
          const json = await response.json();
          return { data: json.data }; // Retorna el usuario eliminado
        },
};

export default dataProvider;

