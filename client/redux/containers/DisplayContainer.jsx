import React from 'react';
import { Grid, Container } from '@mui/material';
import Header from '../components/Header.jsx';
import Map from '../components/Map.jsx';
import SearchFormContainer from './SearchFormContainer.jsx';
import Results from './ResultsContainer.jsx';


const DisplayContainer = () => {
    return (
        <>
            {/* <Header/> */}

            <Map />

            <SearchFormContainer />

            <Results />
        </>
    );
};

export default DisplayContainer;