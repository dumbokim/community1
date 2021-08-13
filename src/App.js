import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Main from './pages/Main';
import FreePosting from './pages/postingPages/FreePosting';
import SchoolPosting from './pages/postingPages/SchoolPosting';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact render={(props) => <Main />} />
        <Route path='/free/posting' exact render={(props) => <FreePosting />} />
        <Route path='/school/posting' exact render={(props) => <SchoolPosting />} />
      </Router>
      
    </div>
  );
}

export default App;
