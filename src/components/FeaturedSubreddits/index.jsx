import React, { useEffect } from 'react';
import SubredditInfo from './SubredditInfo';
import axios from 'axios';

function FeaturedSubreddits() {
  const subreddits = [
    'AskReddit',
    'Pics',
    'Videos',
    'AmITheAsshole',
    'TIFU',
    'Unexpected',
    'News',
    'ThatsInsane',
    'Funny',
    'PublicFreakout',
  ];

  useEffect(() => {
    const fetchSubreddits = async () => {
      try {
        const { data } = await axios.get('http://reddit.com/subreddits.json');
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div className="w-[270px] text-white bg-[#1A1A1B] border-[#343536] border p-2 h-fit rounded-md relative right-7">
      <h3 className="text-center my-2 text-sm font-medium">FEATURED SUBREDDITS</h3>
      <hr className="h-[1px] border-none bg-neutral-500 mb-2" />
      <ul>
        {subreddits.map((subreddit, i) => {
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
