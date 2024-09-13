# Location Tracker

## Overview

The Location Tracker is a web application designed to track and display real-time locations of users on an interactive map. The app uses Leaflet.js for map rendering and Socket.IO for real-time communication between the server and clients. It automatically updates the map with users' locations and handles user disconnections gracefully.

## Features

- **Real-Time Location Tracking:** Uses the browser's geolocation API to continuously track and send location updates.
- **Dynamic Map Updates:** Displays real-time location updates on a Leaflet map.
- **Real-Time Communication:** Utilizes Socket.IO to handle real-time data transmission between clients and the server.
- **User Disconnection Handling:** Removes markers for users who disconnect from the application.

## Technologies Used

- **Leaflet.js:** For interactive and responsive maps.
- **Socket.IO:** For real-time, bidirectional communication.
- **Node.js:** For server-side scripting.
- **HTML/CSS/JavaScript:** For building the frontend.

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) must be installed on your machine.

### Setup

1. **Clone the Repository**

   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/jatin-jamdagni/Live-Location-Tracker.git
   cd location-tracker
   ```

2. **Install Dependencies**

   ```bash 
   npm install
   ```
   
2. **Start**

   ```bash 
   npm run start
   ```
