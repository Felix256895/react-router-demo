import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './asstes/css/style.css';

import Login from './components/login/Login';
import Main from './components/main/Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact  path="/" component={Login} />
            <Route  path="/main" component={Main} />
        </div>
      </Router>
    );
  }
}

export default App;
