import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import API from './utils/API';
import Home from './pages/Home';
import Landing from './pages/Landing';
import NavBar from './components/NavBar';


function App() {
  const [boatData, setBoatData] = useState([])

  useEffect(() => {
    API.getAllData()
      .then(res => setBoatData(res.data))
      .catch(err => console.log(err))
  }, [])


  function boatUserSelected(event) {

    window.location.replace(`/home/${event.target.value}`);

  }


  return (
    <>
      <NavBar></NavBar>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing boatData={boatData} boatUserSelected={boatUserSelected}></Landing>
          </Route>
          <Route exact path="/home/:boatId">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
