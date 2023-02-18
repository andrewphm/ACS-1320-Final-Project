import React from 'react';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import YoutubeIFrame from '../YoutubeIFrame';
import useFetchSubredditInfo from '../../hooks/useFetchSubredditInfo';

function Post({ post }) {
  const {
    selftext,
    title,
    author: { name },
    score,
    created,
    media_embed: { content },
    is_video,
    domain,
    crosspost_parent,
    post_hint,
    gallery_data,
  } = post;

  const { info, icon } = useFetchSubredditInfo(post.subreddit_name_prefixed);

  if (crosspost_parent) return;
  if (gallery_data) return;

  return (
    <article className="bg-[#1A1A1B] border-[#343536] border flex w-[619px] text-white mt-5 cursor-pointer rounded hover:border-neutral-500">
      <div className="p-3 w-[40px] bg-[#161617] flex items-center flex-col gap-y-3 mt-2">
        <i className="cursor-pointer fa-regular fa-lg fa-square-caret-up text-[#FF4500] hover:scale-[1.10]"></i>
        <p className="whitespace-nowrap text-xs font-bold">
          {score >= 1000 ? window.numeral(score).format('0.0a') : score}
        </p>
        <i className="cursor-pointer fa-regular fa-lg fa-square-caret-down text-[#7193FF] hover:scale-[1.10]"></i>
      </div>

      <section className="w-full flex flex-col text-left px-2">
        <div className="my-1">
          <p className=" text-xs text-[#818384]">
            Posted by <Link className="hover:underline hover:text-neutral-400">u/{name}</Link>{' '}
            {formatDistance(new Date(created * 1000), new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
        <h3 className="text-[#D7DADC] font-medium text-lg leading-5 my-1">{title}</h3>
        <p>{selftext}</p>

        {domain.includes('you') && content && <YoutubeIFrame iFrame={post.media_embed.content} />}

        {is_video && (
          <div>
            <video src={post.media.reddit_video.fallback_url} controls></video>
          </div>
        )}

        {post_hint === 'image' && <img src={post.preview.images[0].source.url} alt="" />}

        <div className="w-full text-[#818384] text-xs font-bold flex gap-x-2">
          <button className="py-3 px-2 hover:bg-[#2D2D2E]">
            <i className="fa-regular fa-comment fa-lg mr-1"></i>
            <span>57 comments</span>
          </button>
          <button className="py-3 px-3 hover:bg-[#2D2D2E]">
            <i className="fa-solid fa-gift mr-1 fa-lg"></i>
            <span>Award</span>
          </button>
          <button className="py-3 px-2 hover:bg-[#2D2D2E]">
            <i className="fa-solid fa-share mr-1 fa-lg"></i>
            Share
          </button>
          <button className="py-3 px-2 hover:bg-[#2D2D2E]">
            <i className="fa-regular fa-bookmark mr-1 fa-lg"></i> Save
          </button>
        </div>
      </section>
    </article>
  );
}

export default Post;
