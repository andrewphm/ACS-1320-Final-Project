import React, { useEffect, useState } from 'react';
import Post from '../Post';
import { useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function Feed({ subreddit }) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const location = useLocation();
  const filter = location.pathname.split('/');
  const URL = subreddit ? 'https://www.reddit.com/r/' : 'https://www.reddit.com/';

  useEffect(() => {
    setLoading(true);

    const fetchPosts = async () => {
      try {
        // console.log(`${URL}${filter[filter.length - 1]}/.json`);
        const { data } = await axios.get(`${URL}${filter[filter.length - 1]}/.json`);
        let fetchedPosts = data.data.children.map((post) => post.data);
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {}
    };
    fetchPosts();
  }, [location]);

  return (
    <section className="flex flex-col gap-x-2 w-[640px]">
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
