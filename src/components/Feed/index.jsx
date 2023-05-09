import React, { useEffect, useState } from 'react';
import Post from '../Post';
import { useLocation } from 'react-router';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Feed({ subreddit, filter }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const location = useLocation();
  const URL = subreddit ? `https://www.reddit.com/r/${subreddit}/` : 'https://www.reddit.com/';

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(`${URL}${filter}/.json`);
        let fetchedPosts = data.data.children.map((post) => post.data);
        setPosts(fetchedPosts);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [location]);

  return (
    <section className="flex flex-col gap-x-2 w-full  lg:max-w-[640px] ">
      {loading && (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <Skeleton className="my-4" count={4} height={300} />
        </SkeletonTheme>
      )}

      {posts?.map((post, i) => {
        return <Post key={i} post={post} />;
      })}
    </section>
  );
}

export default Feed;
