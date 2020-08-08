
import React, { useState, useEffect } from 'react';
import './Posts.css';
import { db } from '../firebase';
import Avatar from '@material-ui/core/Avatar';
import firebase from 'firebase';

function Posts({ postId, username, user, caption, imageUrl }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    return (
        <div className="post">
            <div className="post__header">
            <Avatar
                    className="post__avatar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
             <h3>{username}</h3>
            </div>
        </div>
    )
}

export default Posts;
