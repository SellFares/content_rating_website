
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
     this.state = {
      likes: 0,
      dislikes: 0
    };
  }
   handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1
    }));
  };
  handleDislike = () => {
    this.setState((prevState) => ({
      dislikes: prevState.dislikes + 1
    }));
  };

  
  render() {
    return (
     <>
     <div className="content-rating">
        <p>
       Lorem ipsum shit dolor sit amet consectetur adipisicing elit. Sint delectus eos ad magnam debitis quaerat et illum magni, laudantium harum odio assumenda
       dicta consequatur fugit voluptates tempora molestiae rerum quibusdam?
       Lorem ipsum shit dolor sit amet consectetur adipisicing elit. Sint delectus eos ad magnam debitis quaerat et illum magni, laudantium harum odio assumenda
       dicta consequatur fugit voluptates tempora molestiae rerum quibusdam?
       Lorem ipsum shit dolor sit amet consectetur adipisicing elit. Sint delectus eos ad magnam debitis quaerat et illum magni, laudantium harum odio assumenda
       dicta consequatur fugit voluptates tempora molestiae rerum quibusdam?
       Lorem ipsum shit dolor sit amet consectetur adipisicing elit. Sint delectus eos ad magnam debitis quaerat et illum magni, laudantium harum odio assumenda
       dicta consequatur fugit voluptates tempora molestiae rerum quibusdam?
        </p>
        <div className="rating-buttons"> 
          <button className="like-button" onClick={this.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>
      </div>
     </>
    );
  }
}

export default ContentRating;
