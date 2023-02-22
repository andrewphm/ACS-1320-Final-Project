import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router';
import useFetchSubredditInfo from '../hooks/useFetchSubredditInfo';

function Subreddit() {
  const { subreddit } = useParams();

  const data = useFetchSubredditInfo(`r/${subreddit}`);

  return (
    <>
      <Header />
      {data && (
        <main className="w-screen">
          <header className="w-full">
            <div className="h-20 w-full bg-slate-500 px-8"></div>
            <div className="bg-[#1A1A1B]  h-20 w-full px-8">
              <div className="flex gap-x-3">
                <img
                  src={data?.icon_img}
                  className=" h-20 w-20 rounded-full relative bottom-4 border border-black"
                  alt=""
                />
                <div>
                  <h1 className="text-white font-bold text-2xl">{data?.title}</h1>
                  <h2 className="text-neutral-300 font-bold">{data?.display_name_prefixed}</h2>
                </div>
              </div>
            </div>
          </header>
        </main>
      )}
    </>
  );
}

export default Subreddit;
