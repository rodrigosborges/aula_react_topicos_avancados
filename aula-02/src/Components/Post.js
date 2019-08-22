import React from 'react';
import '../App.css';
import ButtonLike from './ButtonLike.js';
import ButtonRemove from './ButtonRemove.js';

class Post extends React.Component {

    render() {
        return (
            <div className="post">
                <div>
                    <ButtonRemove id={this.props.id} _removePost={this.props._removePost}/>
                </div>
                <img className="img" src={this.props.url}></img><br/>
                <h5>{this.props.title}</h5>
                <ButtonLike id={this.props.id} like={this.props.like} _likePost={this.props._likePost}/>
            </div>
        );
    }
}

export default Post