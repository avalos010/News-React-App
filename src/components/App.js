import React, { Component } from 'react';
import {MyProvider} from './ContextProvider';
import Nav from './navBar';
import Latest from './Latest';
import Home from './Home';
import Apple from './Apple';
import Microsoft from './Microsoft';
import '../App.css';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <MyProvider>
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/latest" component={Latest}/>
      <Route exact path="/apple" component={Apple}/>
      <Route exact path="/microsoft" component={Microsoft}/>

      </Switch>
      </MyProvider>
    );
  }
}

export default App;
