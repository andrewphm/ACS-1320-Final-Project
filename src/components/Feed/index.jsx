import React from 'react';
import Post from '../Post';

function Feed({ posts }) {
  return (
    <section className="flex flex-col gap-x-2 w-[640px]">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </section>
  );
}

export default Feed;
