import React from 'react';

function Post({ post }) {
  const {
    selftext,
    title,
    author: { name },
    score,
  } = post;
  console.log(post);

  return (
    <article className="bg-[#1A1A1B] border-[#343536] border flex w-[619px] text-white mt-5">
      <div className="p-3 w-[40px] bg-[#161617] flex justify-center">
        <p>{score}</p>
      </div>

      <section className="w-full flex flex-col text-left px-2">
        <div>
          <p>Posted by {name} time ago.</p>
        </div>
        <h3>{title}</h3>
        <p>{selftext}</p>

        <div className="w-full">
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="white"
                d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z"
              />
            </svg>
          </a>
          <a href="">Share</a>
          <a href="">Save</a>
          <a href="">...</a>
        </div>
      </section>
    </article>
  );
}

export default Post;
