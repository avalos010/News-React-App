import React, { Component } from 'react';
import {MyContext} from './ContextProvider';

class Apple extends Component {

  render() {
    return (
    <div>
    <div className="container ">
    <MyContext.Consumer>
      {(context) => (
        <div className="text-center d-flex flex-column justify-content-center flex-sm-column">
        {context.AppleNews !== null && context.AppleNews.map(news => (

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


export default Apple;
