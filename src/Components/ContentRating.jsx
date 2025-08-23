import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1,
        }));
      },
    };
  }
  render() {
    return (
      <>
        <h1>Text Content Rating</h1>
        <div className="content-rating">
          <p>
            This project utilizes React as the primary JavaScript library for
            building the user interface, implementing a simple like and dislike
            rating system for content. The functionality is achieved using
            React's built-in state management (useState for functional
            components or this.state for class components) to track likes,
            dislikes, and total ratings dynamically. For styling, the project
            can leverage CSS modules or popular styling libraries such as
            Bootstrap or Material-UI to enhance the button design and layout.
            Optionally, additional libraries like react-icons can be integrated
            to display like/dislike icons instead of plain text, while libraries
            such as react-toastify could be used to provide user feedback
            notifications upon clicking the buttons. The overall project remains
            lightweight, relying primarily on React's core features without the
            need for heavy external packages for the basic functionality.
          </p>
          <div className="rating-buttons">
            <button className="like-button" onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button
              className="dislike-button"
              onClick={this.state.handleDislike}
            >
              Dislike ({this.state.dislikes})
            </button>
          </div>
          <p>Total Ratings: {this.state.totalRatings}</p>
        </div>
      </>
    );
  }
}
export default ContentRating;
