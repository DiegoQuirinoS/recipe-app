import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";


import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 130,  
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9    
    
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
   avatar: {
    backgroundColor: red[500],
  },
  cardHeader: {
    overflow: 'hidden',
  },
}));

export default function RecipeReviewCard({ recipe, index }) {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader        
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}></Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={recipe.name}
          
      />
      <CardMedia
        className={classes.media}
        image={recipe.imageURL}
        title={recipe.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {recipe.name}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="show more">
          <Link to={`/detail/${index}`}>
            Recipe
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
}
