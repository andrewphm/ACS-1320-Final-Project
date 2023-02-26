import React from 'react';
import { Link } from 'react-router-dom';

function SubredditInfo({ subreddit }) {
  return (
    <Link to={`../r/${subreddit.display_name}`}>
      <li className="flex gap-x-3 hover:bg-neutral-800 items-center p-2 rounded-md">
        {subreddit.icon_img ? (
          <img
            src={subreddit.icon_img}
            alt=""
            className="w-8 h-8 rounded-full border border-neutral-700"
          />
        ) : (
          <div className="w-8 h-8 rounded-full border-black border bg-white">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </div>
        )}
        <div className="text-left">
          <p className="font-medium text-sm">{`r/${subreddit.display_name}`}</p>
          <p className="text-xs">{subreddit.subscribers.toLocaleString('en-US')} subscribers</p>
        </div>
      </li>
    </Link>
  );
}

export default SubredditInfo;
