import React, { useState, useEffect } from 'react';
import EventsAPI from '../services/EventsAPI';
import LocationsAPI from '../services/LocationsAPI';
// Assuming you created this earlier to stop the Vite error!
import '../css/Events.css'; 

const Events = () => {
    const [events, setEvents] = useState([]);
    const [locations, setLocations] = useState([]);
    const [filter, setFilter] = useState('All');

    useEffect(() => {
        const fetchAllData = async () => {
            const eventsData = await EventsAPI.getAllEvents();
            setEvents(eventsData);

            const locationsData = await LocationsAPI.getAllLocations();
            setLocations(locationsData);
        };
        fetchAllData();
    }, []);

    // Stretch Goal: Countdown logic
    const getTimeRemaining = (dateString) => {
        const eventDate = new Date(dateString);
        const now = new Date();
        const difference = eventDate - now;

        if (difference < 0) return "Passed"; // Indicates the event is over

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        return `${days}d ${hours}h remaining`;
    };

    // Stretch Goal: Filter logic
    const filteredEvents = filter === 'All' 
        ? events 
        : events.filter(event => event.location_id === parseInt(filter));

    return (
        <div className='all-events-page'>
            <h2>All UnityGrid Plaza Events</h2>
            
            {/* Filter Dropdown */}
            <div className='filter-section'>
                <label htmlFor="location-filter">Filter by Location: </label>
                <select 
                    id="location-filter" 
                    value={filter} 
                    onChange={(e) => setFilter(e.target.value)}
                >
                    <option value="All">All Locations</option>
                    {locations.map(loc => (
                        <option key={loc.id} value={loc.id}>{loc.name}</option>
                    ))}
                </select>
            </div>

            {/* Events List */}
            <div className='events-grid'>
                {filteredEvents.map(event => {
                    const timeRemaining = getTimeRemaining(event.date);
                    const isPassed = timeRemaining === "Passed";

                    return (
                        <div 
                            key={event.id} 
                            // Stretch Goal: Different formatting if the event has passed
                            className={`event-card ${isPassed ? 'passed-event' : ''}`}
                            style={{ 
                                border: '1px solid white', 
                                padding: '15px', 
                                margin: '10px 0',
                                opacity: isPassed ? 0.5 : 1, // Dims passed events
                                textDecoration: isPassed ? 'line-through' : 'none'
                            }}
                        >
                            <h3>{event.title}</h3>
                            <p className='event-date'>{new Date(event.date).toLocaleString()}</p>
                            
                            {/* Stretch Goal: Display countdown */}
                            <p className='countdown-timer'>
                                <strong>{timeRemaining}</strong>
                            </p>
                            
                            <p>{event.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Events;