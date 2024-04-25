// This file/module imports various Material UI icons and exports constants related to a hypothetical UI, such as categories with associated icons, URLs, and demo data.

import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Imports the MusicNoteIcon component from Material UI icons
import HomeIcon from '@mui/icons-material/Home'; // Imports the HomeIcon component from Material UI icons
import CodeIcon from '@mui/icons-material/Code'; // Imports the CodeIcon component from Material UI icons
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'; // Imports the OndemandVideoIcon component from Material UI icons
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; // Imports the SportsEsportsIcon component from Material UI icons
import LiveTvIcon from '@mui/icons-material/LiveTv'; // Imports the LiveTvIcon component from Material UI icons
import SchoolIcon from '@mui/icons-material/School'; // Imports the SchoolIcon component from Material UI icons
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural'; // Imports the FaceRetouchingNaturalIcon component from Material UI icons
import CheckroomIcon from '@mui/icons-material/Checkroom'; // Imports the CheckroomIcon component from Material UI icons
import GraphicEqIcon from '@mui/icons-material/GraphicEq'; // Imports the GraphicEqIcon component from Material UI icons
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy'; // Imports the TheaterComedyIcon component from Material UI icons
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Imports the FitnessCenterIcon component from Material UI icons
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'; // Imports the DeveloperModeIcon component from Material UI icons

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png'; // Exports a constant string representing a logo URL

// Exports an array of category objects, each with a name and an associated icon component
export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'JS Mastery', icon: <CodeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'NextJS', icon: <CodeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
  { name: 'Crypto', icon: <DeveloperModeIcon />, },
];

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png'; // Exports a constant string representing a demo thumbnail URL
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A'; // Exports a constant string representing a demo channel URL
export const demoVideoUrl = '/video/GDa8kZLNhJ4'; // Exports a constant string representing a demo video URL
export const demoChannelTitle = 'JavaScript Mastery'; // Exports a constant string representing a demo channel title
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI'; // Exports a constant string representing a demo video title
export const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png' // Exports a constant string representing a demo profile picture URL