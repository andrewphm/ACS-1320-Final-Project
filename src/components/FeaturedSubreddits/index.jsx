import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="w-[270px] text-white bg-[#1A1A1B] border-[#343536] border">
      <h3>FEATURED SUBREDDITS</h3>
      <ul>
        {subreddits.map((subreddit, i) => {
          return <li key={`${subreddit}-${i}`}>{subreddit}</li>;
        })}
      </ul>
    </div>
  );
}

export default FeaturedSubreddits;
