import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    inp: {
        marginBottom: 30,
        width: '70%',
        height: 30,
        borderRadius: 20
    },
    btn: {
        marginLeft: 10
    }
  });
  
const PostDetail = () => {
    const [comment, setComment] = useState([])
    const classes = useStyles();

    const [post, setPost] = useState({})
    const {postDetail} = useParams()

    useEffect(() =>{
        forPost();
        forComment();
    }, [])

    const forPost = () =>{
        const url =`https://jsonplaceholder.typicode.com/posts/${postDetail}`
        fetch(url)
        .then(res => res.json())
        .then(postData => setPost(postData))
    };

    const forComment = () =>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${postDetail}`
        fetch(url)
        .then(res => res.json())
        .then(commentData => setComment(commentData))
    }


    return (
        <div>
          <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
           ID: {post.id}
        </Typography>
        <Typography variant="h5" component="h2">
        {post.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


        <div>
        <h6>Comment: {comment.length}</h6>
        {
            comment.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
        }
        </div>
          <CardContent >
                <input className={classes.inp} placeholder="write a reply" type="text"/>
                <Button className={classes.btn} variant="contained" color="primary">
                    comment
                </Button>
            </CardContent>
        </div>
    );
};

export default PostDetail;