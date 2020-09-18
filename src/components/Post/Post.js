import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {  useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    marginLeft: 350,
    maxWidth: 800,
    minWidth: 200,
    marginTop: 60,
    backgroundColor: 'lightgray'
  },
});

const Post = (props) => {
    const {id, title, body} = props.post;
    
    const history = useHistory()
    const classes = useStyles();


    const handleClick = (postDetails) =>{
       const url = `/post/${postDetails}`;
       history.push(url);
    } 

    

    return (
        <Card className={classes.root}>
        <CardActionArea>
          
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          {/* <Button>
            <Link to={`/post/${id}`}>SEE MORE</Link>
          </Button> */}
          <Button size="small" color="primary" onClick ={() => handleClick(id)} >
            SEE MORE
          </Button>
        </CardActions>
      </Card>
    );
};

export default Post;