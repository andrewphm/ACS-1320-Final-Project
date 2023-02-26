import React from 'react';
import { formatDistance } from 'date-fns';

import Skeleton from 'react-loading-skeleton';

function Comment({ comment }) {
  return (
    <div className="bg-[#32373D] flex flex-col py-3 px-5 my-3 border-l-neutral-400 border-l-[3px]">
      <div className="flex items-center">
        <p className="font-bold">{comment.author || <Skeleton />}</p>{' '}
        <span className="px-2"> • </span>
        <p className="text-xs">
          {' '}
          {formatDistance(new Date(comment.created_utc * 1000), new Date(), {
            addSuffix: true,
          }) || <Skeleton />}
        </p>
      </div>
      <p className="my-3">{comment.body || <Skeleton />}</p>
      <div className="mt-1">
        <p className="font-medium text-sm">
          {comment.score >= 1000
            ? window.numeral(comment.score).format('0.0a')
            : comment.score || <Skeleton />}{' '}
          UPVOTES
        </p>
      </div>
    </div>
  );
}

export default Comment;
