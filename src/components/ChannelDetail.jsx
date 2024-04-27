// ChannelDetail component fetches and displays details of a specific YouTube channel and its videos using YouTube Data API.
import React, { useState, useEffect } from "react"; // Imports React hooks from the react package
import { useParams } from "react-router-dom"; // Imports the useParams hook from react-router-dom for accessing URL parameters
import { Box } from "@mui/material"; // Imports Box component from Material-UI for layout

import { Videos, ChannelCard } from "./"; // Imports Videos and ChannelCard components from the current directory
import { fetchFromAPI } from "../utils/fetchFromAPI"; // Imports a utility function to fetch data from an API

const ChannelDetail = () => { // Defines the ChannelDetail functional component
  const [channelDetail, setChannelDetail] = useState(); // Initializes channelDetail state with undefined
  const [videos, setVideos] = useState(null); // Initializes videos state with null

  const { id } = useParams(); // Destructures the id parameter from the URL

  useEffect(() => { // React hook to perform side effects in the component

    const fetchResults = async () => { // Defines an asynchronous function to fetch channel details and videos
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`); // Fetches channel details from the API
      setChannelDetail(data?.items[0]); // Sets the channelDetail state with the first item from the fetched data

      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`); // Fetches videos from the API
      setVideos(videosData?.items); // Sets the videos state with the items from the fetched videos data
    };

    fetchResults(); // Calls the fetchResults function to execute the fetching

  }, [id]); // The effect will re-run if the id parameter changes

  return ( // Returns the JSX for rendering the component
    <Box minHeight='95vh'> // Box component with a minimum height set
      <Box> // Nested Box component for layout
        <div style={{ // Inline style for the div element
          background: 'rgb(121,9,107)', // Sets the initial background color
          background: 'linear-gradient(90deg, rgba(121,9,107,1) 0%, rgba(114,63,109,1) 51%, rgba(9,115,121,1) 100%, rgba(0,212,255,1) 100%)', // Sets a linear gradient background
          zIndex: 10, // Sets the z-index for layering
          height: '300px' // Sets the height of the div
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" /> // Renders the ChannelCard component with channelDetail prop and negative margin-top
      </Box>
      <Box p={2} display="flex"> // Box component with padding and flex display for layout
        <Box sx={{ mr: { sm: '100px' } }} /> // Box component with responsive right margin
        <Videos videos={videos} /> // Renders the Videos component with videos prop
      </Box>
    </Box>

  );
};

export default ChannelDetail; // Exports the ChannelDetail component for use in other parts of the application