import React, { Component } from 'react';
import {MyContext} from './ContextProvider';
import Jumbotron from './Jumbotron';
class Latest extends Component {

  render() {
    return (
    <div>
    <Jumbotron />
    <div className="container ">
    <MyContext.Consumer>
      {(context) => (

        <div className="text-center d-flex flex-column justify-content-center flex-sm-column">

        {context.Topnews !== null && context.Topnews.map(news => (

          <div className="card w-75 m-3 p-3 mx-auto" key={news.publishedAt}>
          <div className="card-body">
          <h3 className="card-title"> {news.title} </h3>
          <figure>
          <img className="img-thumbnail" src={news.urlToImage} alt="img"/>
          <figcaption>
          <p className="card-text"> {news.description} </p>
          </figcaption>
          </figure>
          <small> {news.publishedAt}</small>
          <a href={news.url} className="btn btn-block btn-dark">Read</a>
          </div>
          </div>
        ))}
        </div>
      )}
    </MyContext.Consumer>
  </div>
  </div>
)
}
}


export default Latest;
