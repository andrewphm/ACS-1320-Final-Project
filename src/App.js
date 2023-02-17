import './App.css';
import './snoowrap-v1';
import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);

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

    reddit.setPosts(res);
  }

  useEffect(() => {
    async function fetchPosts() {
      const subreddit = 'learnjavascript';
      const res = await reddit.getHot(subreddit);
      console.log(res[0].author.name);
      setPosts(res);
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      {posts &&
        posts.map((post) => {
          return <p>{post.title}</p>;
        })}
    </div>
  );
}

export default App;
