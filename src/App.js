import './App.css';
import React from 'react';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Subreddit from './pages/Subreddit';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/r/:subreddit" element={<Subreddit />} />
      </Routes>
    </Router>
  );
}

export default App;
