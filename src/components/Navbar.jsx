// This file defines the Navbar component which includes a logo and a search bar.
// It uses Material UI's Stack component for layout and react-router-dom for navigation.

import { Stack } from "@mui/material" // imports the Stack component from Material UI
import { Link } from "react-router-dom" // imports the Link component from react-router-dom for navigation

import { logo } from '../utils/constants' // imports the logo from the constants file
import SearchBar from "./SearchBar" // imports the SearchBar component

// Defines the Navbar functional component which renders the navigation bar
const Navbar = () => (
  <Stack direction='row' alignItems='center' p={2} sx={{ position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between' }}> // creates a horizontal Stack with styling to make it sticky at the top
    <Link to='/' style={{display:'flex', alignItems:'center'}}> // creates a Link that navigates to the home page with flex styling
      <img src={logo} alt="logo" height={45}/> // displays the logo image with specified height
    </Link>
    <SearchBar /> // includes the SearchBar component
  </Stack>
)

export default Navbar // exports the Navbar component for use in other parts of the application