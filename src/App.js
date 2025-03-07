import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './Navbar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {Container, Link, Typography} from "@mui/material";
const theme = createTheme();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar/>
            <h1>Proyecto 5</h1>
            </ThemeProvider>
    );


}
function Copyright() {
    return (
        <Typography sx={{mb: 2}}>
            { 'Copyright ' }
            <Link href="https://github.com/antoniohdz117">
                {' Git '}
            </Link>
            { new Date().getFullYear() }
        </Typography>);
}




//export default App;
export default function MyApp() {
    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <App/>
                <Typography variant="h4" component="h1" sx={{mb: 2}}>
                    Mi primera App con React y Material UI
                </Typography>
                <Copyright/>
            </Box>
        </Container>
    );
}