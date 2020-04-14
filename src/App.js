import React from 'react';
import CustomNavBar from './components/CustomNavBar'
import './App.css';
import Home from "./components/Home"
import ContactMe from "./components/ContactMe"
import Project from "./components/Project"
import Icon from "./components/Icon"
import MyAccount from "./components/MyAccount"
import LogIn from "./components/LogIn"
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavBar/>
      <Route exact path='/' component={Home} />  
      <Route exact path='/project' component={Project} />  
      <Route exact path='/myaccount' component={MyAccount} />  
      <Route exact path='/login' component={LogIn} />  
      <Route exact path='/contactMe' component={ContactMe} />  
      </div>
      </Router>
  );
}

export default App;
