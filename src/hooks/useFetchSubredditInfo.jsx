import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useFetchSubredditInfo(subreddit) {
  const [info, setInfo] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSubredditData = async () => {
      try {
        const {
          data: { data },
        } = await axios.get(`https://www.reddit.com/${subreddit}/about.json`);

        const { icon_img, public_description } = data;

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
