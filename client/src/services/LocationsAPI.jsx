// client/src/services/LocationsAPI.jsx

const baseUrl = 'http://localhost:3000/api/locations'; // Your backend server URL

const getAllLocations = async () => {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching locations:", error);
        return [];
    }
};

const getLocationById = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching location by ID:", error);
        return {};
    }
};

const LocationsAPI = {
    getAllLocations,
    getLocationById
};

export default LocationsAPI;