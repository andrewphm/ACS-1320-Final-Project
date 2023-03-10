import './App.css';
import React from 'react';
import Home from './pages/Home';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Subreddit from './pages/Subreddit';
import Comments from './pages/Comments';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Home />} />
        <Route path="/top" element={<Home />} />
        <Route path="/r/:subreddit" element={<Subreddit />} />
        <Route path="/r/:subreddit/new" element={<Subreddit />} />
        <Route path="/r/:subreddit/top" element={<Subreddit />} />
        <Route path="/r/:subreddit/comments/:id/:title" element={<Comments />} />
      </Routes>
    </Router>
  );
}

export default App;
