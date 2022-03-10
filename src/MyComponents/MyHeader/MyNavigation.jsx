import React from 'react';
import { AppBar, Button, Container, IconButton, Toolbar, Typography, Box, DialogContent, DialogContentText, TextField } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import { Dialog, DialogTitle } from '@mui/material';
const useStyles = makeStyles((theme) =>({
  root:{
    flexGrow: 1
  },
  menuButton:{
    marginRight: theme.spacing(1)
  },
  title:{
    flexGrow:1
  }
  }))
const MyNavigation = () => {
  const classes = useStyles();
    return (
<AppBar position="fixed">
<Container fixed>
<Toolbar>
<IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
  <MenuIcon/>
  </IconButton>
  <Typography variant='h6' className={classes.title}>Web Developer Blog</Typography>
  <Box mr={3}>
    <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log In</Button>
 <Dialog open={open} onClose={handleClose} aria-labeledby="form-dialog-title">
<DialogTitle id="form-dialog-title">Log in</DialogTitle>
 <DialogContent>
   <DialogContentText>Log in to see videos</DialogContentText>
   <TextField
   autoFocus
   margin="dense"
   id="name"
   label="Email Adress"
   type="email"
   /> 
 </DialogContent>
 </Dialog>
  </Box>
  <Button color="secondary" variant="contained">Sign up</Button>
</Toolbar>
</Container>
</AppBar>
    );
};

export default MyNavigation;