import React, { useState } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Feed from '../components/Feed';
import FeaturedSubreddits from '../components/FeaturedSubreddits';
import SubredditToggle from '../components/SubredditToggle/SubredditToggle';

function Home() {
  const [filter, setFilter] = useState('hot');
  return (
    <>
      <Header />
      <main className=" bg-black min-h-screen flex w-full px-2 py-5 relative">
        <div className="flex w-full gap-x-10 container mx-auto justify-center">
          <FeaturedSubreddits />
          <div className="w-full lg:max-w-[640px]">
            <Filter setFilter={setFilter} filter={filter} />
            <div className="w-full flex justify-center items-center">
              <Feed subreddit={false} filter={filter} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
