import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Feed from '../components/Feed';
import FeaturedSubreddits from '../components/FeaturedSubreddits';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState(null);
  const [subreddit, setSubreddit] = useState(null);

  const reddit = new window.snoowrap({
    userAgent: 'reedit/1.0',
    clientId: 'OXD8YXsHgo7wi5xkF-vxeg',
    clientSecret: process.env.REACT_APP_REDDIT_SECRET,
    username: process.env.REACT_APP_REDDIT_USERNAME,
    password: process.env.REACT_APP_REDDIT_PASSWORD,
  });

  useEffect(() => {
    async function fetchPosts() {
      const subreddit = 'all';
      const res = await reddit.getHot(subreddit);
      setPosts(res);
    }
    fetchPosts();
  }, []);

  return (
    <div className="App bg-black  min-h-screen">
      <Header />
      <Filter />
      <FeaturedSubreddits />
      {posts && (
        <div className="w-full flex justify-center items-center">
          <Feed posts={posts} />
        </div>
      )}
    </div>
  );
}

export default Home;
