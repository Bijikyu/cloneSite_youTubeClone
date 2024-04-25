// This module provides a function to fetch data from the YouTube API using axios and RapidAPI.

import axios from "axios"; // Importing the axios library for making HTTP requests

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' // Constant for the base URL of the YouTube API

// Options object containing the URL, parameters for the request, and headers including the API key
const options = {
    url: BASE_URL, // API base URL
    params: { // Query parameters for the API request
        part: 'snippet', // Part parameter specifies the resource parts that the API response will include
        videoId: 'M7FIvfx5J10', // The videoId parameter specifies the unique ID of the video
        maxResults: 50, // The maxResults parameter specifies the maximum number of items in the response
    },
    headers: { // HTTP headers for the request
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, // API key from environment variables
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com' // Host header required by RapidAPI
    }
};

// Function to fetch data from the YouTube API using the provided endpoint and the options object
export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options); // Destructuring to get data from the response

    return data; // Returning the data from the API response
}