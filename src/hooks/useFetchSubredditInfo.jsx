import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchSubredditInfo(subreddit) {
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSubredditData = async () => {
      try {
        // console.log(subreddit);
        const {
          data: {
            data: { icon_img, public_description },
          },
        } = await axios.get(`https://www.reddit.com/${subreddit}/about.json`);
        setInfo({ icon_img, public_description });
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchSubredditData();
  }, []);

  return { info };
}

export default useFetchSubredditInfo;
