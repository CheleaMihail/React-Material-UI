import React from 'react';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) =>({
    root:{
      flexGrow: 1
    }
    }))

const MyFooter = () => {
  const classes = useStyles();
  const [value, setValue] = useState("recents")
  const handleChange = (event,newValue) => {
setValue(newValue);
  }
    return (
    <footer>
  <Typography variant="h6" align="center" gutterBottom>Footer</Typography>
  <BottomNavigation
  value={value}
  onChange={handleChange}
  className={classes.root}
  >
  <BottomNavigationAction
  label="Recents"
  value="recents"
  icon={<RestoreIcon/>}
  />
    <BottomNavigationAction
  label="Favorites"
  value="favorites"
  icon={<FavoriteIcon/>}
  />  <BottomNavigationAction
  label="Nearby"
  value="nearby"
  icon={<LocationOnIcon/>}
  />  <BottomNavigationAction
  label="Folder"
  value="folder"
  icon={<FolderIcon/>}
  />
  </BottomNavigation>
  <Typography align="center" color="textSecondary" component="p" variant="subtitle1"
  >Material UI + React.js footer
  </Typography>
</footer>
    );
};

export default MyFooter;