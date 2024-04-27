// VideoCard component: This file defines a React component that renders a video card using Material-UI components and React Router for navigation.

import { Link } from "react-router-dom"; // Import Link component from react-router-dom for navigation
import { Typography, Card, CardContent, CardMedia } from "@mui/material"; // Import Material-UI components for UI elements
import { CheckCircle } from "@mui/icons-material"; // Import CheckCircle icon from Material-UI icons

// Import constants for demo purposes
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

// VideoCard functional component that takes a video object as a prop
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

    console.log(snippet); // Log the snippet object to the console for debugging

    // Return the JSX for the video card
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: '320px' }, boxShadow: 'none', borderRadius: 0 }}> // Create a Card component with custom styles
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> // Use Link to navigate to the video page or demo video URL
                <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} sx={{ width: { xs: '100%', sm: '358px', md:'320px' }, height: 180 }} /> // Display video thumbnail with CardMedia
            </Link>
            <CardContent sx={{ background: '#1e1e1e', height: '106px' }} > // Create CardContent with custom styles for video details

                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}> // Use Link to navigate to the video page or demo video URL
                    <Typography variant="subtitle1" fontWeight="bold" color="#FFF"> // Display video title with Typography
                        {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)} // Show the first 60 characters of the video title or demo title
                    </Typography>
                </Link>

                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}> // Use Link to navigate to the channel page or demo channel URL
                    <Typography variant="subtitle2" fontWeight="bold" color="gray"> // Display channel title with Typography
                        {snippet?.channelTitle || demoChannelTitle} // Show the channel title or demo channel title
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: 1 }} /> // Display a check circle icon next to the channel title
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard // Export the VideoCard component for use in other files