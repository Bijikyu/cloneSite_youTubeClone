// This is a React component for displaying a feed of videos. It uses Material UI for styling and has state management for selected categories and videos.

import { useState, useEffect } from "react" // Imports useState and useEffect hooks from React

import { Box, Stack, Typography } from "@mui/material" // Imports Box, Stack, and Typography components from Material UI
import {Sidebar, Videos} from "./" // Imports Sidebar and Videos components from the current directory
import { fetchFromAPI } from "../utils/fetchFromAPI" // Imports a utility function to fetch data from an API

const Feed = () => { // Defines the Feed component

  const [selectedCategory, setSelectedCategory] = useState('New'); // State hook for selected category, initialized to 'New'
  const [videos, setVideos] = useState([]); // State hook for videos, initialized to an empty array

  useEffect(() => { // Effect hook to fetch videos when selectedCategory changes
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`) // Calls the fetchFromAPI function with a query for the selected category
      .then((data) => setVideos(data.items)) // Updates the videos state with the fetched data
  }, [selectedCategory]); // Dependency array with selectedCategory to trigger the effect when it changes

  return ( // Returns the JSX for the Feed component
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}> // Stack component with responsive flexDirection
      <Box sx={{ height: { sx: 'auti', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}> // Box component for the sidebar with responsive styles
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/> // Sidebar component with props for selectedCategory and setSelectedCategory
        <Typography variant="body2" sx={{mt:1.5, color:'#fff'}} > // Typography component for the copyright text
          Copyright 2023 Youtube clone
        </Typography>
      </Box>

      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}> // Box component for the videos with padding and styles
        <Typography variant="h4" fontWeight='bold' mb={2} sx={{color:'white'}}> // Typography component for the category title
        {selectedCategory} <span style={{color: '#F31503'}}>Videos</span> // Displays the selected category with a styled 'Videos' span
        </Typography>

        <Videos videos={videos} /> // Videos component with the videos state passed as props

      </Box>

    </Stack>
  )
}

export default Feed // Exports the Feed component for use in other parts of the application