import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Feed from '../components/Feed';
import FeaturedSubreddits from '../components/FeaturedSubreddits';
import axios from 'axios';

function Home() {
  return (
    <>
      <Header />
      <main className=" bg-black min-h-screen flex w-screen px-16 py-5 relative">
        <div className="flex w-full justify-center">
          <FeaturedSubreddits />
          <div className="">
            <Filter />
            <div className="w-full flex justify-center items-center">
              <Feed subreddit={false} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
