import { createTheme } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#29AB87',  // Jungle Green
        },
        secondary: {
            main: '#FFFFFF',  // White
        },
        tertiary: {
            main: "#FAFAFA"   // Almost White
        },
        error: {
            main: '#FF0000',  // Red
        },
        warning: {
            main: '#FFA500',  // Orange
        },
        info: {
            main: '#FFC800'   // Yellow
        },
        success: {
            main: '#4CAF50',  // Green
        },
        misc: {
            main: '#232023',  // Charcoal
        }
    },
    typography: {
        fontFamily: [
            'roboto',
            'Arial',
            'sans-serif',
        ].join(','),
    },
});

export default mainTheme;