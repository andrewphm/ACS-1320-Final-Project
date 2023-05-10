import React from 'react';
import { formatDistance } from 'date-fns';
import { Link } from 'react-router-dom';
import YoutubeIFrame from '../YoutubeIFrame';
import useFetchSubredditInfo from '../../hooks/useFetchSubredditInfo';
import Skeleton from 'react-loading-skeleton';
import Comment from '../Comment/';

function PostWithComments({ post, comments }) {
  const {
    selftext,
    title,
    author,
    score,
    created,
    media_embed: { content },
    is_video,
    domain,
    crosspost_parent,
    post_hint,
    gallery_data,
    stickied,
    permalink,
    num_comments,
    url,
  } = post;

  const data = useFetchSubredditInfo(post?.subreddit_name_prefixed);

  if (crosspost_parent) return;
  if (gallery_data) return;
  if (stickied) return;

  return (
    <article className="bg-[#1A1A1B] border-[#343536] border flex w-full text-white rounded hover:border-neutral-500 ">
      <header className="p-3 hidden md:flex w-[40px] bg-[#161617] items-center flex-col gap-y-3 mt-2">
        <button
          aria-label="Upvote"
          className="cursor-pointer fa-regular fa-lg fa-square-caret-up text-neutral-500 hover:text-[#FF4500] hover:scale-[1.10]"
        ></button>
        <p className="whitespace-nowrap text-xs py-1 font-bold">
          {score >= 1000 ? window.numeral(score).format('0.0a') : score || <Skeleton />}
        </p>
        <button
          aria-label="Downvote"
          className="cursor-pointer fa-regular fa-lg fa-square-caret-down text-neutral-500 hover:text-[#7193FF] hover:scale-[1.10]"
        ></button>
      </header>

      <main className="w-full flex flex-col text-left px-2">
        <nav className="mb-1 mt-2 flex items-center text-xs text-white">{/* ... */}</nav>
        <h3 className="text-[#D7DADC] font-medium text-lg md:text-2xl leading-6 my-2">{title}</h3>

        <p className="">{selftext}</p>

        {/* ... */}

        {/* image */}
        {post_hint === 'image' && <img src={url} className="w-full h-full" alt={title} />}

        {/* ... */}

        <h2 className="md:text-xl lg:text-2xl font-medium my-4">{comments.length} Comments</h2>

        {comments.map((comment, i) => {
          return <Comment key={i} comment={comment} />;
        })}
      </main>
    </article>
  );
}

export default PostWithComments;
