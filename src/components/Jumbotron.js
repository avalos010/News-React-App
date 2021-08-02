import React from 'react';
import {MyContext} from './ContextProvider';


const Jumbotron = () => (
  <div className="jumbotron text-center mt-2 ">
  <h4> Latest Top News: </h4>
  <MyContext.Consumer>
  {context => {
  return context.JumboNews !== null &&
  <div className="mt-3">
    <h3>{context.JumboNews[0].title}</h3>
    <figure>
    <img className="img-fluid" width="50%" src={context.JumboNews[0].urlToImage} alt="topnewsimg" />
    </figure>
    <small>{new Date(context.JumboNews[0].publishedAt).toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).
  replace(/(\d+)\/(\d+)\/(\d+)/, '$3-$1-$2')}</small>
    <br/>
    <a target="_blank" href={context.JumboNews[0].url} className="btn text-light btn-primary">Read</a>
    </div>
  }}
</MyContext.Consumer>
</div>
);


export default Jumbotron;
