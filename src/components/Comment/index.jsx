import React from 'react';
import { formatDistance } from 'date-fns';

import Skeleton from 'react-loading-skeleton';

function Comment({ comment }) {
  return (
    <section
      className="bg-[#32373D] w-full flex flex-col py-3 px-5 my-3 border-l-neutral-400 border-l-[3px]"
      aria-labelledby="comment-author comment-text"
      tabIndex={0}
    >
      <header className="flex items-center">
        <p id="comment-author" className="font-bold">
          {comment.author || <Skeleton />}
        </p>
        <span className="px-2"> • </span>
        <time className="text-xs">
          {formatDistance(new Date(comment.created_utc * 1000), new Date(), {
            addSuffix: true,
          }) || <Skeleton />}
        </time>
      </header>
      <main className="my-3 w-full">
        <p id="comment-text">{comment.body || <Skeleton />}</p>
      </main>
      <footer className="mt-1">
        <p className="font-medium text-sm">
          {comment.score >= 1000
            ? window?.numeral(comment.score).format('0.0a')
            : comment.score || <Skeleton />}{' '}
          UPVOTES
        </p>
      </footer>
    </section>
  );
}

export default Comment;
