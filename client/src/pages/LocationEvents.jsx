import React, { useState, useEffect } from 'react';
import LocationsAPI from '../services/LocationsAPI';
import EventsAPI from '../services/EventsAPI';
// Make sure you have a CSS file for this, or remove the import if not needed
import '../css/LocationEvents.css'; 

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState({});
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchLocationAndEvents = async () => {
            try {
                // 1. Get the specific location details
                const locationData = await LocationsAPI.getLocationById(index);
                setLocation(locationData);

                // 2. Get all events tied to this location's ID
                const eventsData = await EventsAPI.getEventsByLocation(index);
                setEvents(eventsData);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchLocationAndEvents();
    }, [index]);

    return (
        <div className='location-events-page'>
            <header className='location-header'>
                <h2>{location.name}</h2>
                <p>{location.description}</p>
            </header>

            <main className='events-container'>
                <h3>Upcoming Events at {location.name}</h3>
                
                {events && events.length > 0 ? (
                    <div className='events-grid'>
                        {events.map(event => (
                            <div key={event.id} className='event-card'>
                                <h4>{event.title}</h4>
                                {/* Formats the timestamp into a readable date/time */}
                                <p className='event-date'>
                                    {new Date(event.date).toLocaleString()}
                                </p>
                                <p>{event.description}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No events scheduled for this location yet.</p>
                )}
            </main>
        </div>
    );
};

export default LocationEvents;