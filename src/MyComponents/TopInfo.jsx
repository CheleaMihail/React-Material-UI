import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Typography, Grid, Button } from '@material-ui/core';
const useStyles = makeStyles((theme) =>({
    menuButton:{
      marginRight: theme.spacing(1)
    }
    }))

const TopInfo = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContent}> 
        <Container maxWidth="md">
        <Typography
        variant="h2" align="center"
        color="textPrimary" gutterBottom>
        Web developer blog
        </Typography>
        <Typography
        variant="h5" align="center"
        color="textSecondary" paragraph>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
            dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
            Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
        </Typography>
        <div className={classes.mainButtons}>
        <Grid container spacing={5} justify="center">
          <Grid item>
            <Button variant="contained" color="primary">Start now</Button>
            </Grid>
            <Grid item>
            <Button variant="outlined" color="primary">Learn more</Button>
              </Grid>
          </Grid>
        </div>
        </Container>
        </div>
    );
};

export default TopInfo;