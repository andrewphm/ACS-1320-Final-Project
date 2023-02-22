import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { fetchSubreddit } from '../../API';

function SubredditInfo({ subreddit }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchInfo = async () => {
      try {
        const { data } = await axios.get(`https://www.reddit.com/r/${subreddit}/about.json`, {
          headers: {
            accept: 'application/json',
          },
        });
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInfo();
  }, []);

  return (
    <Link to={`r/${subreddit}`}>
      <li className="flex gap-x-3 hover:bg-neutral-800 items-center p-2 rounded-md">
        {data?.icon_img ? (
          <img src={data?.icon_img} alt="" className="w-8 h-8 rounded-full" />
        ) : (
          <div className="w-8 h-8 rounded-full border-black border bg-white">
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </div>
        )}
        <div className="text-left">
          <p className="font-medium text-sm">{`r/${subreddit}`}</p>
          <p className="text-xs">{data?.subscribers.toLocaleString('en-US')} subscribers</p>
        </div>
      </li>
    </Link>
  );
}

export default SubredditInfo;
