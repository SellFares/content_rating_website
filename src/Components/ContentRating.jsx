
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
 constructor() {
    super();
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike:() => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },

      handleDislike:() => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }
  }
    }
  render() {
    return (
     <>
     <div className='content-rating'>
        <h1> Ode to the IBM Full-Stack Developer Course (A Coursera Masterpiece) <br /> </h1>
        <p>
        Upon the vast digital sea so wide, Where dreamers sail and coders ride, Behold! A beacon, shining bright, IBM’s course—a guiding light! <br />
        In the realms where logic reigns, Through JavaScript and Python chains, It molds the minds, it shapes the soul, With HTML, CSS—pure control! <br />
        No mere program, not just a class, A symphony of skills en masse! Databases bend to student’s might, APIs dance with sheer delight! <br />
        And Coursera stands—a golden gate, Unlocking futures, sealing fate. For those who dare, for those who strive, This course will make their dreams alive! <br />
        So raise your laptops, lift them high, Deploy your code towards the sky! A full-stack titan you shall be, With IBM’s grand legacy! 🚀 <br />
        — This course is no joke! It's packed with cutting-edge knowledge to transform beginners into tech warriors! <br />
        </p>
        <div className='rating-buttons'>
            <button className="like-button" onClick={this.state.handleLike}>
                Like ({this.state.likes})
            </button>
            <button className="dislike-button" onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes})
            </button> <br />
                Total Ratings ({this.state.totalRatings})
        </div>
     </div>
     </>
    );
  }
}

export default ContentRating;
