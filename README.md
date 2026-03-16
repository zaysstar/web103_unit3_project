# Web Development Project 3 - *UnityGrid Plaza (Virtual Community Space)*

Submitted by: **Izayah Rahming**

**UnityGrid Plaza** is a full-stack web application that allows users to explore a cybercore-themed virtual community space. Users can interact with a custom SVG map to select venues (like the Echo Lounge or House of Blues) and view upcoming events, complete with countdown timers and location filtering.

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] The web app uses React to display data from the API.
- [x] The web app is connected to a PostgreSQL database, with an appropriately structured `events` table.
- [x] The web app displays a title.
- [x] Website includes a visual interface that allows users to select a location they would like to view (Interactive SVG Map).
- [x] Each location has a detail page with its own unique URL.
- [x] Clicking on a location navigates to its corresponding detail page and displays a list of all events from the `events` table associated with that location.

## Stretch Features

The following **stretch** functionality is implemented:

- [x] An additional page shows all possible events.
- [x] Users can sort or filter events by location using a dropdown menu.
- [x] Events display a countdown showing the time remaining before that event.
- [x] Events appear with different formatting when the event has passed (dimmed opacity and struck-through text).

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="c:\Users\Izayah Rahming\Downloads\ezgif-67ab19e89b1d0269 (1).gif" title="Video Walkthrough" width="800" alt="Video Walkthrough" />

## Notes

Navigating Vite configuration and dynamic component rendering presented some challenges, particularly regarding correct file pathing and managing asynchronous API calls to the Render PostgreSQL database. Implementing the interactive SVG map polygons and mapping them accurately to database IDs was a major highlight!

## License

    Copyright 2026 Izayah Rahming

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.