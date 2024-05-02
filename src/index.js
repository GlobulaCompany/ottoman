import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import About from './pages/About';

ReactDOM.render(
  <Router>
    <Routes>
  <Route exact path="/" element={<App />} />
  <Route path="/about" element={<About />} />
</Routes>

  </Router>,
  document.getElementById('root')
);
