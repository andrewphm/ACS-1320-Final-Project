import React from 'react';
import { Link } from 'react-router-dom';
import SubredditInfo from './SubredditInfo';

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

  return (
    <div className="w-[270px] text-white bg-[#1A1A1B] border-[#343536] border p-2  h-fit rounded-md">
      <h3>FEATURED SUBREDDITS</h3>
      <ul>
        {subreddits.map((subreddit, i) => {
          // return <li key={`${subreddit}-${i}`}>{subreddit}</li>;
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
