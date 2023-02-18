import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';

import Feed from './components/Feed';

function App() {
  const [posts, setPosts] = useState(null);
  const [subreddit, setSubreddit] = useState(null);

  const reddit = new window.snoowrap({
    userAgent: 'reedit/1.0',
    clientId: 'OXD8YXsHgo7wi5xkF-vxeg',
    clientSecret: process.env.REACT_APP_REDDIT_SECRET,
    username: process.env.REACT_APP_REDDIT_USERNAME,
    password: process.env.REACT_APP_REDDIT_PASSWORD,
  });

  // Use the API to fetch posts from a subreddit

  useEffect(() => {
    async function fetchPosts() {
      const subreddit = 'all';
      const res = await reddit.getHot();
      setPosts(res);
    }

    fetchPosts();
  }, []);

  return (
    <div className="App bg-black  min-h-screen">
      <Home />
      {console.log()}
      {posts && (
        <div className="w-full flex justify-center items-center">
          <Feed posts={posts} />
        </div>
      )}
    </div>
  );
}

export default App;
