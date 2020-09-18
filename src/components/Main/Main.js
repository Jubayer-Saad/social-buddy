import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Main = () => {
    const [post, setPost] = useState([])
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data))
    },[])
    return (
        <div className={{alignItems: 'center'}}>
            <h5 style={{fontSize: '15px', color: 'goldenRod'}}>Post: {post.length}</h5>
            {
                post.map(post =><Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Main;