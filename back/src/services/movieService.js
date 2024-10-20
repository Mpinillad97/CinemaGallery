module.exports = {
    getMovies: async () => {
        try {
            const response = await fetch("https://students-api.up.railway.app/movies");
            if (!response.ok) {
                throw new Error(`Error al obtener las películas: ${response.statusText}`);
            }
            const data = await response.json();  // Convertir la respuesta a JSON
            return data;
        } catch (error) {
            console.error("Error al obtener las películas: ", error);
            throw error;
        }
    },
};