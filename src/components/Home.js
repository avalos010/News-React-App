import React from 'react';
import {Link} from 'react-router-dom';
const Home = () => (
  <div className="jumbotron text-center mt-2">
  <h3 className="display-3"> Welcome </h3>
  <p className="lead"> Get the latest top news and get the latest news on apple and microsoft</p>
  <Link to="/latest" className="btn btn-primary bg-dark"> Latest News </Link>
  </div>

)
export default Home;
