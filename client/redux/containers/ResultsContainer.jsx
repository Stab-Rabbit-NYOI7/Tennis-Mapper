import React from "react";
import { useSelector } from "react-redux";
import ResultsCard from '../components/ResultsCard.jsx';
import { Grid, Container, Paper, Typography } from '@mui/material';

const Results = () => {

    const results = useSelector((state) => state.results);

    const renderedResults = results.map((result, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <ResultsCard data={result} />
      </Grid>
    ))
    
    return (
        <Grid item xs={12}>
            {results.length > 0 && (
                <Paper elevation={3} >
                    <Container maxWidth="lg" sx={{ backgroundColor: '#C1D7AE', p: 2, }}>
                        <Typography 
                            variant="h4" 
                            component="div" 
                            sx={{ color: '#283618'}}>
                            Search Results
                        </Typography>
                        <hr></hr>
                        <Grid container spacing={3} id='resultsList'>
                            {renderedResults}
                        </Grid>
                    </Container>
                </Paper>
            )}
        </Grid>
    );
};


export default Results