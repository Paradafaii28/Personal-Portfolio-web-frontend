import React from 'react';
import CustomNavBar from './components/CustomNavBar'
import './App.css';
import Home from "./components/Home"
import ContactMe from "./components/ContactMe"
import { BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <CustomNavBar/>
      <Route exact path='/' component={Home} />  
      <Route exact path='/contactMe' component={ContactMe} />  
      </div>
      </Router>
  );
}

export default App;
