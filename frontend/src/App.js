import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// components
import Home from './components/Home/Home';
// import Navigation from './components/Navigation/Navigation';

// styles
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={ <Home /> } />
        </Routes>
        {/* <Navigation /> */}
      </div>
    </Router>
  );
}

export default App;
