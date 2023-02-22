import axios from 'axios';

const BASE_URL = 'http://reddit.com/';

const options = {
  headers: {
    accept: 'application/json',
  },
};

export async function fetchSubreddit(subreddit) {
  try {
    const { data } = await axios.get(`${BASE_URL}r/${subreddit}.json`);
    return data;
  } catch (error) {
    console.log(error);
  }
}
