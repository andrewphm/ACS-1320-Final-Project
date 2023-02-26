import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://www.reddit.com';

function useFetchComments(pathname) {
  const [comments, setComments] = useState(null);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}${pathname + '.json'}`);
        setPost(data[0].data.children[0].data);

        data[1].data.children.pop();
        console.log(data[1].data.children);

        setComments(
          data[1].data.children.map(({ data: { body, author, score, created_utc } }) => {
            return { body, author, score, created_utc };
          })
        );

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchPostAndComments();
  }, []);

  return { comments, post, loading, error };
}

export default useFetchComments;
