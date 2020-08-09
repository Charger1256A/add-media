
import React, { useState, useEffect } from 'react';
import './Posts.css';
import { db } from '../firebase';
import Avatar from '@material-ui/core/Avatar';
import firebase from 'firebase';

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

render() {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar
                    className="post__avatar"
                    alt={this.props.username}
                    src="/static/images/avatar/1.jpg"
                />
             <h3>{this.props.username}</h3>
            </div>
            {/* <div className="image__container"> */}
            <img 
                className="post__image"
                src={this.props.imgUrl}
                alt=""
            />
            <div className="post__information">
                <a target="_blank" href={this.props.url}>{this.props.urlDes}</a>
                <h6>{this.props.des}</h6>
            </div>
            {/* </div> */}

        </div>
        )
    }
}

export default Posts;
