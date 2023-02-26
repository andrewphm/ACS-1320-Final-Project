import React, { useEffect, useState } from 'react';
import SubredditInfo from './SubredditInfo';
import axios from 'axios';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function FeaturedSubreddits() {
  const [subreddits, setSubreddits] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        const { data } = await axios.get('https://www.reddit.com/subreddits.json');
        setSubreddits(data.data.children.map(({ data }) => data));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchSubreddits();
  }, []);

  return (
    <div className="w-[270px] text-white bg-[#1A1A1B] border-[#343536] border p-2 h-fit rounded-md relative right-7">
      <h3 className="text-center my-2 text-sm font-medium">FEATURED SUBREDDITS</h3>
      <hr className="h-[1px] border-none bg-neutral-500 mb-2" />
      <ul>
        {loading && (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <Skeleton className="my-1" count={12} height={50} />
          </SkeletonTheme>
        )}
        {subreddits?.map((subreddit, i) => {
          return (
            <div key={i}>
              <SubredditInfo subreddit={subreddit} />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default FeaturedSubreddits;
