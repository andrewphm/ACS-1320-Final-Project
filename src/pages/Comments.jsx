import React from 'react';
import Header from '../components/Header';
import { useParams, useLocation } from 'react-router';
import useFetchSubredditInfo from '../hooks/useFetchSubredditInfo';
import SubredditInfo from '../components/SubredditInfo';
import Filter from '../components/Filter';
import Feed from '../components/Feed';
// import Post from '../components/Post';
import useFetchComments from '../hooks/useFetchComments';

function Comments() {
  const { subreddit, id, title } = useParams();
  const location = useLocation();
  console.log(location.pathname);
  const data = useFetchSubredditInfo(`r/${subreddit}`);
  const { comments, post } = useFetchComments(location.pathname);

  return (
    <>
      <Header />
      {data && (
        <main className="w-screen bg-black min-h-screen">
          <header className="w-full">
            <div className="h-20 w-full bg-slate-500"></div>
            <div className="bg-[#1A1A1B]">
              <div className=" mx-auto max-w-5xl h-20 px-8">
                <div className="flex gap-x-3">
                  {data.icon_img ? (
                    <img
                      src={data?.icon_img}
                      className=" h-20 w-20 rounded-full relative bottom-4 border border-black"
                      alt=""
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-full relative bottom-4 bg-blue-400">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class=" ">
                        <path d="M16.5,2.924,11.264,15.551H9.91L15.461,2.139h.074a9.721,9.721,0,1,0,.967.785ZM8.475,8.435a1.635,1.635,0,0,0-.233.868v4.2H6.629V6.2H8.174v.93h.041a2.927,2.927,0,0,1,1.008-.745,3.384,3.384,0,0,1,1.453-.294,3.244,3.244,0,0,1,.7.068,1.931,1.931,0,0,1,.458.151l-.656,1.558a2.174,2.174,0,0,0-1.067-.246,2.159,2.159,0,0,0-.981.215A1.59,1.59,0,0,0,8.475,8.435Z"></path>
                      </svg>
                    </div>
                  )}

                  <div>
                    <h1 className="text-white font-bold text-2xl">{data?.title}</h1>
                    <h2 className="text-neutral-300 font-bold">{data?.display_name_prefixed}</h2>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className=" py-10 w-[1152px] mx-auto">
            <div className="flex w-full justify-center">
              <div className="">{/* <Post post={post} /> */}</div>
              <SubredditInfo data={data} />
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export default Comments;
