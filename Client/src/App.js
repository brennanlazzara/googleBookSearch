import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import Search from './Pages/Search';
import Saved from './Pages/Saved';

import './App.css';

function App() {
  return (
    <Router>
      <Header />
    <div className="App">
           <div className="container">
        <Route exact path='/' component={Search}/>
        <Route exact path='/Saved' component={Saved}/>
      </div>
    </div>
    
    </Router>
  );
}

export default App;
