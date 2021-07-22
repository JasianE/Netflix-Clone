import './App.css';
import Startpage from './Components/Startpage'
import Home from './Components/Home'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import React, {useState, useEffect} from 'react'

function App() {
  const [profiles, setProfiles] = useState()
  const [currentProfile, setCurrentProfile] = useState()

  function changeCurrentProfile(name, src, isKid){
    setCurrentProfile({name: name, src: src, isKid: isKid})
  }
  function setNewProfiles(profileArray){
    setProfiles(profileArray)
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = '/' render = {props => <Startpage change = {changeCurrentProfile} setNewProfiles = {setNewProfiles} />} />
          <Route exact path = '/home' render = {props => <Home profiles = {profiles} profile = {currentProfile} change = {changeCurrentProfile} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
