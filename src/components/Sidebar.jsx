// Sidebar component that displays a list of categories as buttons, allowing the user to select a category.

import { Stack } from "@mui/material" // Imports the Stack component from Material-UI for layout purposes.

import { categories } from '../utils/constants' // Imports the categories array from a constants file.

// Functional component Sidebar that takes selectedCategory and setSelectedCategory as props.
const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    // Stack component from Material-UI to layout the category buttons.
    <Stack direction='row' sx={{ overflow: 'auto', height: { sx: 'auto', md: '95%' }, flexDirection: { md: 'column' } }}> 
        {categories.map((category) => ( // Maps over the categories array to create buttons for each category.
            // Button element for each category with an onClick event to set the selected category.
            <button className="category-btn" onClick={() => setSelectedCategory(category.name)} style={{background: category.name === selectedCategory && '#FC1503', color: 'white'}} key={category.name}>
                // Span element that contains the category icon with conditional styling based on the selected category.
                <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight:'15px'}}>{category.icon}</span>
                // Span element that contains the category name with conditional opacity based on the selected category.
                <span style={{opacity: category.name === selectedCategory ? '1' : "0.8"}}>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar // Exports the Sidebar component for use in other parts of the application.