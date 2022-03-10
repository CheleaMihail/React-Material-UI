import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Container, Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
const useStyles = makeStyles((theme) =>({
    cardMedia:{
      paddingTop: "56.25%"
    },
    cardContent:{
      flexGrow: 1
    },
    cardGrid:{
      marginTop: theme.spacing(4)
    }
    }))
    const cards = [1,2,3,4,5,6,7,8,9];
const Body = () => {
    const classes = useStyles();
    return (
        <Container className={classes.cardGrid} maxWidth="md">
<Grid container spacing={4}>
  {cards.map((card)=>(
    <Grid item key={card} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
        className={classes.cardMedia}
        image="https://source.unsplash.com/random"
        title="Image title"
        />
        <CardContent className={classes.cardContent}>
         <Typography variant="h5" gutterBottom align="left">
           Blog post
         </Typography>
         <Typography align="left">
           Blog post. Web developer blog. Web developer blog. Blog post.
         </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
           View
          </Button>
          <Button size="small" color="primary">
           Edit
          </Button>
          <LayerIcon/>
          <PlayCircleFilledIcon/>
        </CardActions>
      </Card>
    </Grid>
  ))}
  </Grid>
</Container>
    );
};

export default Body;