// This file/module is a React component for displaying search results based on a search term using Material UI components and a custom fetch API utility.

import { useState, useEffect } from "react" // Importing useState and useEffect hooks from React
import { useParams } from "react-router-dom" // Importing useParams hook from react-router-dom for accessing URL parameters
import { Box, Typography } from "@mui/material" // Importing Box and Typography components from Material UI for layout and text styling
import { Videos } from "./" // Importing Videos component from the current directory
import { fetchFromAPI } from "../utils/fetchFromAPI" // Importing a utility function to fetch data from an API

// The SearchFeed component is responsible for fetching and displaying videos based on the search term from the URL.
const SearchFeed = () => {

  const [videos, setVideos] = useState([]); // State hook for storing videos, initialized as an empty array
  const { searchTerm } = useParams(); // Hook to extract the searchTerm parameter from the URL

  // useEffect hook to fetch videos when the searchTerm changes.
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`) // Fetching videos from the API using the search term
      .then((data) => setVideos(data.items)) // Updating the videos state with the fetched data
  }, [searchTerm]); // Dependency array containing searchTerm to re-run the effect when it changes

  // Rendering the search results using Material UI components and passing the videos to the Videos component.
  return (
    <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}> // Box component for layout with padding and styles
      <Typography variant="h4" fontWeight='bold' mb={2} sx={{ color: 'white' }}> // Typography component for displaying the search term
        Search Result for: <span style={{ color: '#F31503' }}>{searchTerm}</span> // Span element to highlight the search term
      </Typography>

      <Videos videos={videos} /> // Videos component to display the list of videos

    </Box>
  )
}

export default SearchFeed; // Exporting the SearchFeed component for use in other parts of the application