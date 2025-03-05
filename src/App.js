import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <h1>Proyecto 5</h1>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
                <TextField variant="outlined" placeholder="No se" />
            </Box>
        </ThemeProvider>
    );
}

export default App;