import React from "react";
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../reducers/favoritesSlice.js';
// import { addToLeastFavorites } from '../reducers/leastFavoritesSlice.js'
import { Card, Button, styled, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

const StyledButton = styled(Button)(({theme}) => ({
    backgroundColor: theme.palette.primary,
    color: '#283618',
    '&:hover': { backgroundColor: '#7fa879' },
}));

const ResultsCard = (props) => {
    const dispatch = useDispatch();

    // const actionAdd = { type: addToFavorites, payload: { /* ... */ } };
    // const actionDislike = { type: addToDislikes, payload: { /* ... */ } };
    let onHandleLike = () => dispatch(
        addToFavorites({
            name: props.data.name,
            address: props.data.address,
            rating: props.data.rating
        })
    );

    let onHandleDislike = () => dispatch(
        addToLeastFavorites({
            name: props.data.name,
            address: props.data.address,
            rating: props.data.rating
        })
    );
    return (
        <Card
            sx={{
                maxWidth: 400,
                padding: '16px',
                mb: 2,
                '&:hover': {
                    transform: 'scale(1.05)',
                    transition: 'transform .2s ease-in-out'
                },
                backgroundColor: '#f5ebe0'
            }}
        >
            <Typography variant="h5" sx={{ color: '#283618'}}>
                {props.data.name}
            </Typography>
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <StyledButton
                    variant="contained"
                    onClick={onHandleLike}
                    startIcon={<StarRateIcon sx={{ color: 'gold' }}/>}
                >
                </StyledButton>
                {/* <Button
                    variant="outlined"
                    onClick={onHandleDislike}
                    sx={{ borderColor: '#CCFF00', color: '#CCFF00', '&:hover': { borderColor: 'black', color: 'yellow' } }}
                // sx={{ borderColor: '#CCFF00', color: '#CCFF00', '&:hover': { borderColor: '#32936F', color: '#32936F' } }}
                >
                    Dislike
                </Button> */}
            </div>
            <div id='results' style={{ textAlign: 'left' }}>
                <Typography variant="body1" sx={{ color: '#283618' }}><strong>Address:</strong> {props.data.address}</Typography>
                <Typography variant="body1" sx={{ color: '#283618' }}><strong>Rating:</strong> {props.data.rating}</Typography>
            </div>
        </Card>
    );
};


export default ResultsCard;