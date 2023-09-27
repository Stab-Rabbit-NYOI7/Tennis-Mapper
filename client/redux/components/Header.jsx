import React from 'react';
import Typography from '@mui/material/Typography';
import { Paper, Grid } from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/system';



const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
});

const MyThemeComponent = styled('div')(({ theme }) => ({
  // ...theme.typography.h4,
  color: theme.palette.primary.main,
  marginBottom: 2,
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  textAlign: 'center',
}));

const Header = () => {
  return (
    <Grid item xs={12}>
       <Paper sx={{
          padding: '1rem',
          backgroundColor: 'var(--steel-blue)',
          maxHeight: '100vh',
          overflowY: 'auto',
          borderRadius: 2, p: 3 ,
          elevation: 3,
          marginTop: '10px',
          marginLeft: '10px'
        }}>
        <ThemeProvider theme={theme}>
          <MyThemeComponent>
            {/* <Typography variant='h4'> */}
               🎾 Easy Court
            {/* </Typography> */}
          </MyThemeComponent>
        </ThemeProvider>
        </Paper>
    </Grid>
  );
};

export default Header;
