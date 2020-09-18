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
      marginTop: 20
    },
    title: {
      fontSize: 1,
    },
    pos: {
      fontSize: 15,
      color: 'blue',
      marginRight: 450
    },
    inp: {
        marginBottom: 30,
        width: '70%',
        height: 30,
        borderRadius: 20
    },
  });
const PostDetail = () => {
    const [comment, setComment] = useState({})
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
                <CardActionArea>
                <CardContent>
                <Typography gutterBottom variant="body2" component="p">
                        ID: {post.id}
                </Typography>
                <Typography gutterBottom variant="h4" component="h2">
                        {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                        {post.body}
                </Typography>
                <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button>
            SEE MORE
          </Button>
        </CardActions>
            </CardContent>
            </CardActionArea>
        </Card>
        
        <h6>Comment: {comment.length}</h6>
        {
            comment.map(comment => <Comment comment={comment}></Comment>)
        }
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