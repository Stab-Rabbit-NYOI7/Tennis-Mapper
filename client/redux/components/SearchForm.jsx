import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToResults, clearResults } from '../reducers/resultsSlice.js';
import { Grid, TextField, Button, Container, styled } from '@mui/material';
import { setMap } from '../reducers/mapSlice.js';
import { loadMap } from '../reducers/mapSlice.js';

const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary,
    color: '#283618',
    '&:hover': { backgroundColor: '#7fa879' },
}));

const searchForm = (props) => {
    const dispatch = useDispatch();
    const google = window.google;
    const googleMapInstance = useSelector((state) => state.map.googleMapInstance);

    let onHandleSearch = () => {
        //----
        dispatch(clearResults());

        const inputVal = document.getElementById("inputSearch").value;

        console.log('inputVal', inputVal);
        fetch("api/find/", {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                "zip": inputVal
            })
        })
            .then(response => response.json())
            .then(response => {
                console.log('RESPONSE LOOK HERE', response);
                const currentMap = googleMapInstance;

                let newLat = response[0].location.lat
                let newLng = response[0].location.lng
                let mapPosition = { lat: newLat, lng: newLng }
                dispatch(setMap({ center: mapPosition, zoom: 14 }));

                // Map each response item and add markers
                //testing
                response.forEach((el) => {
                    let position = { lat: el.location.lat, lng: el.location.lng }
                    const marker = new google.maps.Marker({
                        position: position,
                        map: currentMap,
                        title: el.name
                    });
                    marker.addListener("click", () => {
                        const infoWindow = new google.maps.InfoWindow({
                            content: `
                            <div>
                                <h3>${el.name}</h3>
                                <p>Address: ${el.address}</p>
                                <p>Rating: ${el.rating}</p>
                            </div>
                        `,
                        });

                        infoWindow.open(currentMap, marker);
                    });

                    dispatch(addToResults({
                        name: el.name,
                        address: el.address,
                        rating: el.rating
                    }));
                });
            });
    }

    return (
        <Container>
            <Grid container spacing={1} justifyContent="center" alignItems="center">
                <Grid item xs={10} sm={5}>
                    <TextField
                        id="inputSearch"
                        label="Zip Code"
                        variant="outlined"
                        fullWidth
                        size='small'
                        InputProps={{
                            style: {
                                backgroundColor: 'white',
                                borderColor: '#395E66',
                                color: '#395E66'
                            }
                        }}
                        InputLabelProps={{
                            style: {
                                color: '#395E66',
                            }
                        }}
                    />
                </Grid>
                <Grid item xs={2} sm={1}>
                    <StyledButton
                        variant="contained"
                        color="primary"
                        onClick={onHandleSearch}
                        fullWidth
                    >
                        Search
                    </StyledButton>
                </Grid>
            </Grid>
        </Container>
    );
}

export default searchForm;