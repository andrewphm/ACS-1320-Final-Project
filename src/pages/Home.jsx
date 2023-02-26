import React, { useState } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Feed from '../components/Feed';
import FeaturedSubreddits from '../components/FeaturedSubreddits';

function Home() {
  const [filter, setFilter] = useState('hot');
  return (
    <>
      <Header />
      <main className=" bg-black min-h-screen flex w-screen px-16 py-5 relative">
        <div className="flex w-full justify-center">
          <FeaturedSubreddits />
          <div className="">
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
