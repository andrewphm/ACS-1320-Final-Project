import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchSubredditInfo(subreddit) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSubredditData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`https://www.reddit.com/${subreddit}/about.json`);

        setData(data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchSubredditData();
  }, []);

  return data;
}

export default useFetchSubredditInfo;
