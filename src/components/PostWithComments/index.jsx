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
    <article className="bg-[#1A1A1B] border-[#343536] border flex w-full  text-white mt-5 rounded hover:border-neutral-500 ">
      <div className="p-3 w-[40px] bg-[#161617] flex items-center flex-col gap-y-3 mt-2">
        <i className="cursor-pointer fa-regular fa-lg fa-square-caret-up text-neutral-500 hover:text-[#FF4500] hover:scale-[1.10]"></i>
        <p className="whitespace-nowrap text-xs py-1 font-bold">
          {score >= 1000 ? window.numeral(score).format('0.0a') : score || <Skeleton />}
        </p>
        <i className="cursor-pointer fa-regular fa-lg fa-square-caret-down text-neutral-500 hover:text-[#7193FF] hover:scale-[1.10]"></i>
      </div>

      <section className="w-full flex flex-col text-left px-2">
        <div className="mb-1 mt-2 flex items-center text-xs text-white">
          <div className="flex items-center gap-x-1">
            {data?.icon_img ? (
              <div className="bg-black h-5 w-5 rounded-full">
                <img src={data?.icon_img} alt="" className="w-5 h-5 rounded-full" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full border-black border bg-white">
                <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                </svg>
              </div>
            )}
            <Link to={`../${post.subreddit_name_prefixed}`}>
              <p className="font-bold hover:underline">{post?.subreddit_name_prefixed} </p>
            </Link>
          </div>

          <span className="px-1"> • </span>
          <p className=" text-xs text-[#818384]">
            Posted by <Link className="hover:underline hover:text-neutral-400"> u/{author}</Link>{' '}
            {formatDistance(new Date(created * 1000), new Date(), {
              addSuffix: true,
            })}
          </p>
        </div>
        <h3 className="text-[#D7DADC] font-medium text-2xl leading-5 my-2">{title}</h3>

        <p className="">{selftext}</p>

        {/* youtube video */}
        {domain?.includes('you') && content && <YoutubeIFrame iFrame={post.media_embed.content} />}

        {/* reddit video */}
        {is_video && (
          <div className="bg-black w-full ">
            <video className="mx-auto" src={post.media.reddit_video.fallback_url} controls></video>
          </div>
        )}

        {/* image */}
        {post_hint === 'image' && <img src={url} className="w-full h-full" alt="" />}

        {/* link */}
        {post_hint === 'link' && (
          <div className="flex items-center my-1">
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className=" text-[#4FBCFF] w-1/2 truncate text-xs"
            >
              {url}
            </a>
            <i className="cursor-pointer fa-solid fa-xs fa-arrow-up-right-from-square text-[#4FBCFF]"></i>
          </div>
        )}

        <h2 className="text-2xl font-medium my-4">{comments.length} Comments</h2>

        {comments.map((comment, i) => {
          return <Comment key={i} comment={comment} />;
        })}
      </section>
    </article>
  );
}

export default PostWithComments;
