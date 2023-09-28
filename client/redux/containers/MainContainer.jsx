import React from 'react';
import { Grid, Container } from '@mui/material';
import Navbar from '../components/Navbar.jsx'
import DisplayContainer from './DisplayContainer.jsx';
import DrawerContainer from './DrawerContainer.jsx';
import FavoritesContainer from './FavoritesContainer.jsx';
// import LeastFavorites from './redux/containers/leastFavoritesContainer.jsx';

const MainContainer = () => {
    return (
        <main className="app-background">
            <Navbar />

            <Container>
                
                <DisplayContainer />

                {/* <FavoritesContainer /> */}
                
            </Container>
        </main>
    );
};

          // <Grid item xs={6}>
          //   <LeastFavorites />
          // </Grid>

export default MainContainer;