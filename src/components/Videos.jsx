// This file/module defines a React component that renders a collection of video and channel cards using Material UI components.

import { Stack, Box } from "@mui/material" // Imports Stack and Box components from Material UI library
import {VideoCard, ChannelCard} from './' // Imports VideoCard and ChannelCard components from the current directory

// The Videos component takes in a list of videos and an optional direction prop and renders video or channel cards accordingly.
const Videos = ({ videos, direction }) => { // Defines the Videos component with props 'videos' and 'direction'

  if(!videos?.length) return 'Loading...'; // Checks if the videos array is empty or not provided, and returns 'Loading...' if true
  return ( // Returns the JSX for the Videos component
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' gap={2}> // Creates a Stack layout with a default direction of 'row' and sets the gap between items
      {videos.map((video, index) => ( // Maps over the videos array to render each video or channel card
        <Box key={index}> // Wraps each card in a Box component with a unique key
          {video.id.videoId && <VideoCard video={video} />} // Renders a VideoCard if the video object has a videoId
          {video.id.channelId && <ChannelCard channelDetail={video} />} // Renders a ChannelCard if the video object has a channelId
        </Box>
      ))}
    </Stack>
  )
}

export default Videos // Exports the Videos component for use in other parts of the application