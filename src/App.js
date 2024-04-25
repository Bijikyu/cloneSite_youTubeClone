// This is the main application component that sets up routing and layout for the React app.
import { BrowserRouter, Routes, Route } from 'react-router-dom' // imports BrowserRouter, Routes, and Route components from 'react-router-dom' for routing
import { Box } from '@mui/material' // imports Box component from '@mui/material' for layout and styling

import {Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed} from './components' // imports Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed components from the components folder

const App = () => { // defines the main App component
  return ( // returns the JSX for the App component
    <BrowserRouter> // component that wraps the application and provides routing capabilities
      <Box sx={{backgroundColor: '#000'}}> // Box component with styling for the background color
        <Navbar /> // Navbar component that will be displayed on all pages
        <Routes> // component that wraps all Route components
          <Route path='/' exact element={<Feed />}/> // Route for the home page, rendering the Feed component
          <Route path='/video/:id' element={<VideoDetail />} /> // Route for individual video details, rendering the VideoDetail component
          <Route path='/channel/:id' element={<ChannelDetail />} /> // Route for channel details, rendering the ChannelDetail component
          <Route path='/search/:searchTerm' element={<SearchFeed />} /> // Route for search results, rendering the SearchFeed component
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App // exports the App component for use in other parts of the application