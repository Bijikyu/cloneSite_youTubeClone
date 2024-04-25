// This is a React component that provides a search bar for users to input search terms. When a term is submitted, it navigates to a search results page using React Router.

import { useState } from "react" // Imports the useState hook from React for state management
import { useNavigate } from "react-router-dom" // Imports the useNavigate hook from React Router for navigation

import { Paper, IconButton } from "@mui/material" // Imports Paper and IconButton components from Material-UI
import { Search } from '@mui/icons-material' // Imports the Search icon from Material-UI icons

// Defines a functional component named SearchBar
const SearchBar = () => {

    const [searchTerm, setSearchTerm] = useState(''); // Initializes the searchTerm state with an empty string

    const navigate = useNavigate(); // Initializes the navigate function from useNavigate hook for navigation

    // Defines a function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior

        if(searchTerm){ // Checks if searchTerm is not empty
            navigate(`/search/${searchTerm}`); // Navigates to the search route with the searchTerm

            setSearchTerm(''); // Resets the searchTerm to an empty string
        }
    }

    // Returns the JSX for the search bar component
    return (
        <Paper component='form' onSubmit={handleSubmit} sx={{borderRadius:20, border:'1px solid #e3e3e3', pl:2, boxShadow:'none', mr:{sm:5} }}> {/* Paper component as a form with styling and an onSubmit event */}
            <input className="search-bar" placeholder="search..." onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} /> {/* Input field for search term with an onChange event to update searchTerm */}
                <IconButton type="submit" sx={{p: '10px', color: 'red'}}> {/* IconButton as a submit button with styling */}
                    <Search /> {/* Search icon */}
                </IconButton>
        </Paper>
    )
}

export default SearchBar // Exports the SearchBar component for use in other parts of the application