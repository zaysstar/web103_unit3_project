// client/src/services/EventsAPI.jsx

const baseUrl = 'http://localhost:3000/api/events'; 

const getEventsByLocation = async (locationId) => {
    try {
        const response = await fetch(`${baseUrl}/location/${locationId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
};

// NEW FUNCTION: Get all events
const getAllEvents = async () => {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching all events:", error);
        return [];
    }
};

const EventsAPI = {
    getEventsByLocation,
    getAllEvents // Make sure to export it!
};

export default EventsAPI;