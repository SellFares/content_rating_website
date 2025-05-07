import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super(),
      (this.state = {
        likes: 0,
        dislike: 0,
        handleLike: () => {
          this.setState((prevState) => ({ likes: prevState.likes + 1 }));
        },
        handleDisLike: () => {
          this.setState((prevState) => ({ dislike: prevState.dislike + 1 }));
        },
      });
  }
  render() {
    return (
      <div className="content-rating">
        <p>---Add text here blam blam---</p>
        <div className="rating-buttons">
          <button className="like-button" onClick={this.state.handleLike}>
            {this.state.likes}
          </button>
          <button className="dislike-button" onClick={this.state.handleDisLike}>
            {this.state.dislike}
          </button>
        </div>
      </div>
    );
  }
}

export default ContentRating;
