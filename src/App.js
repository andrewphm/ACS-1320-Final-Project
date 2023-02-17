import './App.css';
import './snoowrap-v1';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = useState(null);

  const reddit = new window.snoowrap({
    userAgent: 'reedit/1.0',
    clientId: 'OXD8YXsHgo7wi5xkF-vxeg',
    clientSecret: process.env.REACT_APP_REDDIT_SECRET,
    username: process.env.REACT_APP_REDDIT_USERNAME,
    password: process.env.REACT_APP_REDDIT_PASSWORD,
  });

  // Use the API to fetch posts from a subreddit

  async function fetchPosts() {
    const subreddit = 'learnjavascript';
    const res = await reddit.getHot(subreddit);

    reddit.setPosts(res[0]);
  }

  useEffect(() => {
    async function fetchPosts() {
      const subreddit = 'relationships';
      const res = await reddit.getHot(subreddit);
      setPosts(res[0]);
    }

    fetchPosts();
  }, []);

  return (
    <div className="App bg-black  h-screen">
      <Home />

      {posts && (
        <div className="w-full flex justify-center items-center">
          <Post post={posts} />
        </div>
      )}
    </div>
  );
}

export default App;
