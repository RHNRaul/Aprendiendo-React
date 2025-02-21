
const productosGet = async () => {
        try {
          const response = await fetch('https://my-json-server.typicode.com/RHNRaul/demojson/products');
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const productos = await response.json();
          return productos;
        } catch (error) {
          // Puedes manejar el error o volver a lanzarlo
          //console.error("Error al obtener productos:", error);
          throw new Error(error);
        }
};

export {productosGet};