import React from 'react';
import Grid from '@mui/material/Grid';
import DisplayContainer from './DisplayContainer.jsx';
import DrawerContainer from './DrawerContainer.jsx';
import FavoritesContainer from './FavoritesContainer.jsx';
// import LeastFavorites from './redux/containers/leastFavoritesContainer.jsx';

const MainContainer = () => {
    return (
    <Grid container spacing={3} className="app-background">
        <DisplayContainer />
        
        <FavoritesContainer />
        
        <DrawerContainer />

        
    </Grid>

    );
};

          // <Grid item xs={6}>
          //   <LeastFavorites />
          // </Grid>

export default MainContainer;