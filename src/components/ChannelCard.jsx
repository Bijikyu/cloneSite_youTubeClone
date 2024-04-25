// ChannelCard component definition - This file defines a React component that renders a card representing a YouTube channel. It includes the channel's thumbnail, title, and subscriber count, and is styled using Material-UI components.

import React from 'react'; // Import React library for building user interfaces
import { Box, CardContent, CardMedia, Typography } from '@mui/material'; // Import Material-UI components for UI design
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Import Material-UI icon for verified checkmark
import { Link } from 'react-router-dom'; // Import Link component for client-side navigation
import { demoProfilePicture } from '../utils/constants'; // Import placeholder profile picture from constants

// ChannelCard functional component with props channelDetail and marginTop
const ChannelCard = ({ channelDetail, marginTop }) => (
    // Box component from Material-UI with styling props
    <Box sx={{
        boxShadow: 'none', // Removes box shadow
        borderRadius: '20px', // Sets border radius to 20px
        display: 'flex', // Sets display to flex for layout
        justifyContent: 'center', // Centers content horizontally
        alignItems: 'center', // Centers content vertically
        width: { xs: '356px', md: '320px' }, // Sets responsive width
        height: '326px', // Sets height of the box
        margin: 'auto', // Centers the box in the available space
        marginTop // Sets top margin to the value of marginTop prop
    }}>
        // Link component for navigation wrapped around CardContent
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            // CardContent component with styling props
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }}>
                // CardMedia component displaying channel thumbnail or default image
                <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }} />
                // Typography component for channel title with CheckCircleIcon
                <Typography variant="h6">
                    {channelDetail?.snippet?.title}{' '} // Displays channel title
                    <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} /> // Verified checkmark icon with styling
                </Typography>
                // Conditional rendering of subscriber count if available
                {channelDetail?.statistics?.subscriberCount && (
                    // Typography component for subscriber count
                    <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers // Parses and formats subscriber count
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
);

export default ChannelCard; // Exports ChannelCard component for use in other parts of the application