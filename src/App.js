import './App.css';
import './snoowrap-v1';
import React, { useState, useEffect } from 'react';
import Home from './pages/Home';

function App() {
  const [posts, setPosts] = useState([]);

  const reddit = new window.snoowrap({
    userAgent: 'reedit/1.0',
    clientId: 'OXD8YXsHgo7wi5xkF-vxeg',
    clientSecret: process.env.REACT_APP_REDDIT_SECRET,
    username: process.env.REACT_APP_REDDIT_USERNAME,
    password: process.env.REACT_APP_REDDIT_PASSWORD,
  });

  // Use the API to fetch posts from a subreddit

  async function fetchPosts() {
    const subreddit = 'learnjavascript';
    const res = await reddit.getHot(subreddit);

    reddit.setPosts(res);
  }

  useEffect(() => {
    async function fetchPosts() {
      const subreddit = 'relationships';
      const res = await reddit.getHot(subreddit);
      console.log(res);
      setPosts(res);
    }

    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Home />
      <iframe
        width="356"
        height="200"
        src="https://www.youtube.com/embed/i-VU25UfHWM?feature=oembed&enablejsapi=1"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        title="Awkward Bill Burr vs Sarah Silverman Interview"
      ></iframe>

      <div class="md">
        <p>
          "I was at work when my boyfriend texted me early in the morning telling me he reset his
          phone. Because he reset his phone none of his passwords were saved and he got locked out
          of his crypto and lost alot of money. I won't say the amount because i don't wanna give
          any details away but it was a lot. I was asking him questions about how he can get it back
          because I didn't understand what he meant when he was talking about keys . He then sent me
          a voice memo saying it was my fault he forgot the password for his phone and had to reset
          it because he's afraid I'm going to look through his phone. One I would like to say yes i
          have in the past because i had a feeling he was cheating and i was right both times......
          .. It was mostly just texting idk if went any further. But after the last time I just told
          him I wasn't gonna check because i would like to trust him ... Back to what I was saying.
          He kept saying if he didn't have to worry about me going through his phone he wouldn't
          have to keep changing his password. I told him I no longer do that and i also told him its
          his own paranoia causing him to do that . He knows the password to my phone I haven't
          changed it i have nothing to hide . After i said this he got angry and said since we are
          both cheaters and have something to hide i will no longer hide mine. This completely set
          me off I couldn't focus on work or anything. I started to cry at my desk and couldn't
          stop. I had to stop work early because I couldn't get it together. I haven't cheated on
          him so ¡really don't know why he said that.... I sent him alot of angry messages and i
          broke up with him because enough is enough honestly i cant handle it anymore. He told me i
          don't care about him telling me he lost his life saving and all i care about is cheating
          .... After I finished being mad I started to feel guilty like maybe I should've said
          something more about him losing his money. I don’t know if I overreacted to the situation
          .. TLDR: my boyfriend lost the password to his crypto and blames me because he has to
          change the password to his phone so i cant look through it . He got angry after i said it
          wasnt my fault and said hes not gonna hide his cheating . I broke up with him because im
          tired of him cheating. He says i dont care about him losing his money but i do . But i
          can’t keep getting cheating on its too much ."
        </p>

        <p>
          TLDR: my boyfriend lost the password to his crypto and blames me because he has to change
          the password to his phone so i cant look through it . He got angry after i said it wasnt
          my fault and said hes not gonna hide his cheating . I broke up with him because im tired
          of him cheating. He says i dont care about him losing his money but i do . But i can’t
          keep getting cheating on its too much .
        </p>
      </div>
    </div>
  );
}

export default App;
