import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Paper, Typography, Grid, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    root:{
      flexGrow: 1
    },
    menuButton:{
      marginRight: theme.spacing(1)
    },
    title:{
      flexGrow:1
    },
    mainFeaturesPost:{
      position: "relative",
      color: theme.palette.common.white,
      marginBottom: theme.spacing(4),
      backgroundSize: "cover",
      backgroundRepeat:"no-repeat",
      backgroundPosition: "center"
    },
    mainFeaturesPostContent:{
      position: "relative",
      padding: theme.spacing(6),
      marginTop: theme.spacing(3)
    },
    overlay:{
      position: "absolute",
      top:0,
      bottom:0,
      left:0,
      right:0,
      backgroundOverlay:"rgba(0,0,0,.3)"
    }
    }))
  
const MyHeader = () => {
    const classes = useStyles();
    return (
        <main>
  <Paper className={classes.mainFeaturesPost} style={{backgroundImage: 'url(https://source.unsplash.com/random)'}}>
<Container fixed>
  <div className={classes.overlay}></div>
<Grid container>
<Grid item md={6}>
  <div className={classes.mainFeaturesPostContent}> 
<Typography 
component="h1" 
variant="h3"
color="inherit" 
gutterBottom>
  Web developer blog
  </Typography>
  <Typography 
variant="h5" 
color="inherit"
paragraph>
Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
  </Typography>
  <Button variant="contained" color="secondary">
    Learn more
  </Button>
  </div>
  </Grid>
</Grid>
</Container>
  </Paper>
</main>
    );
};

export default MyHeader;