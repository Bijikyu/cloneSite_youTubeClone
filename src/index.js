// This file is the entry point for a React application. It imports necessary modules and styles, initializes the root element, and renders the main App component.

import React from "react"; // Imports the React library for building user interfaces
import ReactDOM from "react-dom/client"; // Imports ReactDOM for DOM-specific methods

import App from "./App"; // Imports the main App component
/* eslint-disable */
import './index.css' // Imports CSS styles for the application

// Initializes the root of the React application by selecting the 'root' DOM element
const root = ReactDOM.createRoot(document.getElementById('root')); // Creates a root container for the React application

// Renders the App component into the root container
root.render(<App />);