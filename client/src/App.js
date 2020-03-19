import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Landing from './pages/Landing';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Landing></Landing>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
