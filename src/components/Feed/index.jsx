import React, { useEffect, useState } from 'react';
import Post from '../Post';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';

function Feed({ subreddit }) {
  const [loading, isLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const location = useLocation();
  const filter = location.pathname.split('/');
  const URL = subreddit ? 'https://www.reddit.com/r/' : 'https://www.reddit.com/';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // console.log(`${URL}${filter[filter.length - 1]}/.json`);
        const { data } = await axios.get(`${URL}${filter[filter.length - 1]}/.json`);
        let fetchedPosts = data.data.children.map((post) => post.data);
        setPosts(fetchedPosts);
      } catch (error) {}
    };
    fetchPosts();
  }, [location]);

  return (
    posts && (
      <section className="flex flex-col gap-x-2 w-[640px]">
        {posts.map((post, i) => {
          return <Post key={i} post={post} />;
        })}
      </section>
    )
  );
}

export default Feed;
