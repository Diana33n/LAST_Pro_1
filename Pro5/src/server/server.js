const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').settings();

const application = express();
application.use(cors());
application.use(bodyParser.json());
application.use(express.static('./dist'));

const PORT = 8080;
application.listen(PORT, () => {
    console.log(`CORS-enabled web backend listening on port ${PORT}`);
});

const trips = [];

application.get('/', (req, res) => {
    res.status(200).send('./dist/mainEntry.html');
});

application.post('/getTrip', async (req, res) => {
    if (!req.body.city || !req.body.date) {
        return res.status(400).json('Bad Request');
    }

    const { city, date } = req.body;
    
    try {
        const location = await getCoordinates(city);
        if (!location) return res.status(404).json('Location not found');

        const weather = await getWeather(location.lat, location.lng);
        if (!weather) return res.status(404).json('Weather data not found');

        const image = await getImage(city);

        const trip = { city, date, weather, image };
        trips.push(trip);
        res.status(201).json(trip);
    } catch (error) {
        console.error("Error fetching trip data:", error);
        res.status(500).json('Internal Server Error');
    }
});

async function getCoordinates(city) {
    const geoURL = `http://endpoint.geonames.org/searchJSON?q=${city}&maxRows=1&username=${process.env.GEONAMES_USER}`;
    
    try {
        const response = await fetch(geoURL);
        const data = await response.json();
        if (data.geonames.length > 0) {
            return { lat: data.geonames[0].lat, lng: data.geonames[0].lng };
        }
    } catch (error) {
        console.error("Geonames API error:", error);
    }
    return null;
}

async function getWeather(lat, lon) {
    const weatherURL = `https://endpoint.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_KEY}`;
    
    try {
        const response = await fetch(weatherURL);
        const data = await response.json();
        return data.data[0];
    } catch (error) {
        console.error("Weatherbit API error:", error);
    }
    return null;
}

async function getImage(city) {
    const imageURL = `https://pixabay.com/endpoint/?key=${process.env.PIXABAY_KEY}&q=${city}&image_type=photo`;

    try {
        const response = await fetch(imageURL);
        const data = await response.json();
        return data.hits.length ? data.hits[0].webformatURL : 'https://via.placeholder.com/400';
    } catch (error) {
        console.error("Pixabay API error:", error);
    }
    return 'https://via.placeholder.com/400';
}

module.exports = application;
