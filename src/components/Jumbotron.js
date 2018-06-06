import React from 'react';
import {MyContext} from './ContextProvider';
import {Link} from 'react-router-dom';

const Jumbotron = () => (
  <div className="jumbotron text-center mt-2 ">
  <h4> Latest Top News: </h4>
  <MyContext.Consumer>
  {context => {
  return context.JumboNews !== null &&
  <div>
    <h3>{context.JumboNews[0].title}</h3>
    <figure>
    <img className="img-fluid" width="50%" src={context.JumboNews[0].urlToImage} alt="topnewsimg" />
    </figure>
    <small>{context.JumboNews[0].publishedAt}</small>
    <br/>
    <Link to={`/post/${context.JumboNews[0].publishedAt}`} onClick={() => context.postClicked(context.JumboNews[0])} className="btn  btn-primary">Read</Link>
    </div>
  }}
</MyContext.Consumer>
</div>
);


export default Jumbotron;
