import React from 'react';
import Post from '../Post';

function Feed({ posts }) {
  return (
    <section className="flex flex-col gap-x-2">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </section>
  );
}

export default Feed;
