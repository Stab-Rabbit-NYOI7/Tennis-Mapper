import React, { useEffect, useState } from "react"; 
import { Avatar, TextField, Typography, Button, Grid, Paper, Link, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from './theme.js'

const LogIn = () => {
    
    return (
    <ThemeProvider theme={theme}>
        <Grid container component='main' sx={{ height: '100vh'}}>
            <Grid item xs={false} sm={4} md={7}
                sx={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1581355655067-f6ef2e53aac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2893&q=80)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{ 
                    my: 20,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '15px'
                   }}>
                    
                    <Typography variant='h2' align='center' sx={{my: 2, color: '#254441'}}> Welcome to Tennis Finder!</Typography>
                    <Button variant='contained'>Sign in with username</Button>
                    <Button variant='outlined'>Sign in with Google</Button>
                    <Grid container gap={3} sx={{my: 2, justifyContent: 'center'}}>
                        <Link href="#" variant="body2">
                            {"Forgot password?"}
                        </Link>
                        <Link href="#" variant="body2">
                            {"Create an account"}
                        </Link>
                    </Grid>
                </Box> 
            </Grid >
    
        </Grid>
    </ThemeProvider>
    )
}


export default LogIn;
