import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Calculator from './Calculator';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Calculator} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;



