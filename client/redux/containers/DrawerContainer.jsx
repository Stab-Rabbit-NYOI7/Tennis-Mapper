import React, { useState, Fragment } from 'react';
import { 
    Grid, 
    Box, 
    Drawer, 
    Button, 
    List, 
    Divider, 
    ListItem, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText,
    IconButton,
    styled,
} from '@mui/material';
import Face5Icon from '@mui/icons-material/Face5';
import StarRateIcon from '@mui/icons-material/StarRate';
import LogoutIcon from '@mui/icons-material/Logout';
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledButton = styled(Button)(({theme}) => ({
    // backgroundColor: theme.palette.primary.dark,
    color: '#283618',
}));


const DrawerContainer = () => {
    const [state, setState] = useState({
        menu: false,
    })

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    }

    const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {/* add string to array to add a list item */}
            {['User'].map((text, index) => (
              <ListItem key={text}>
                  <ListItemIcon>
                    <Face5Icon sx={{ color: 'black' }}/>
                  </ListItemIcon>
                  <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Favorites', 'Love All'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    {index === 0 ? <StarRateIcon sx={{ color: 'gold' }}/> : <FavoriteIcon sx={{ color: 'red' }}/>}
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
          </List>
            <List 
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    width: '100%',
                    textAlign: 'center',
                }}
            >
            {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <LogoutIcon sx={{ color: 'black' }}/>
                </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
            ))}
          </List>
        </Box>
      );
    
    return (
        <Grid item xs={6}>
            <Grid
                container
                sx={{ 
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end'
                }}
            >
                {['right'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <StyledButton 
                        onClick={toggleDrawer(anchor, true)}
                        variant='text'
                    >
                        Menu
                    </StyledButton>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                    </React.Fragment>
                ))}
            </Grid>
        </Grid>
    )
}

export default DrawerContainer;