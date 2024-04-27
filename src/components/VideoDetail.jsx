```jsx
// VideoDetail component: Displays the details of a video including the video player, title, channel information, and related videos.

import React, { useEffect, useState } from "react"; // Imports React, useEffect and useState hooks from react
import { Link, useParams } from "react-router-dom"; // Imports Link component and useParams hook from react-router-dom for routing
import ReactPlayer from "react-player"; // Imports ReactPlayer component for video playback
import { Typography, Box, Stack } from "@mui/material"; // Imports Typography, Box, and Stack components from Material-UI
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Imports CheckCircleIcon component from Material-UI icons

import { Videos } from "./"; // Imports Videos component from the current directory
import { fetchFromAPI } from "../utils/fetchFromAPI"; // Imports fetchFromAPI utility function from utils

const VideoDetail = () => { // Defines the VideoDetail functional component

  const [videoDetail, setVideoDetail] = useState(null); // Initializes videoDetail state with null as default value
  const [videos, setVideos] = useState(null); // Initializes videos state with null as default value
  const { id } = useParams(); // Destructures id from the URL parameters using useParams hook

  useEffect(() => { // useEffect hook to perform side effects
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`) // Calls fetchFromAPI with the video details endpoint
      .then((data) => setVideoDetail(data.items[0])); // Sets the videoDetail state with the fetched data

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`) // Calls fetchFromAPI with the related videos endpoint
      .then((data) => setVideos(data.items)) // Sets the videos state with the fetched data
  }, [id]); // Dependency array with id, to re-run the effect when id changes

  if (!videoDetail?.snippet) return 'Loading...'; // Conditional rendering: shows 'Loading...' if videoDetail is not yet loaded

  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail; // Destructures necessary data from videoDetail

  return ( // JSX to render the component
    <Box minHeight='95vh'> // Box component with a minimum height style
      <Stack direction={{ xs: "column", md: "row" }}> // Stack component with responsive direction
        <Box flex={1}> // Box component with flex style
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}> // Box component with width, position, and top styles
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls /> // ReactPlayer component with video URL and controls
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}> // Typography component with styling for the title
              {title} // Displays the video title
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2} > // Stack component with row direction and styling
              <Link to={`/channel/${channelId}`}> // Link component to navigate to the channel page
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="#fff"> // Typography component with responsive variant and color styling
                  {channelTitle} // Displays the channel title
                  <CheckCircleIcon sx={{ fontSize: '12px', color: 'gray', ml: "5px" }} /> // CheckCircleIcon component with styling
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'> // Stack component with row direction and styling
                <Typography variant="body1" sx={{ opacity: 0.7 }}> // Typography component with variant and opacity styling for view count
                  {parseInt(viewCount).toLocaleString()} views // Displays the view count with formatting
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}> // Typography component with variant and opacity styling for like count
                  {parseInt(likeCount).toLocaleString()} likes // Displays the like count with formatting
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'> // Box component with padding and alignment styles
          <Videos videos={videos} direction='column' /> // Videos component with videos data and direction prop
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail // Exports the VideoDetail component for use in other files