// This component represents a single favorited tennis court.
// It is passed data from "Favorites" as a prop.

import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const Favorite = (props) => {
    return (
        <Card id='favoriteContainer' sx={{ 
            maxWidth: 400, 
            mb: 2, 
            backgroundColor: 'var(--sea-green)',
            p: 2
            }}>
            <Typography variant="h6" sx={{ color: 'var(--off-yellow)', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>{props.data.name}</Typography>
            <div id='favorite'>
            <List id='favorite' sx={{ color: 'var(--off-yellow)' }}>
                <ListItem sx={{ fontFamily: 'Roboto' }}>{props.data.address}</ListItem>
                <ListItem sx={{ fontFamily: 'Roboto' }}>{props.data.rating}</ListItem>
            </List>
            </div>
        </Card>
    );
}

export default Favorite;