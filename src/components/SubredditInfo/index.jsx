import React from 'react';

function SubredditInfo({ data }) {
  return (
    <section className="min-w-[250px] hidden relative  lg:block w-[300px] text-white bg-[#1A1A1B] border-[#343536] border p-2 h-fit rounded-sm ">
      <div>
        <p className="text-[#818384] font-bold">About community</p>
        <hr className="h-[1px] border-none bg-neutral-500 my-1" />
        <p className="my-5">{data.public_description}</p>
        <p className="my-3 text-sm font-bold">
          <i className="fa-solid fa-cake-candles mr-1 "></i>
          Created{' '}
          {new Date(data.created * 1000).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
        <p className="my-3  text-sm font-bold">
          {window?.numeral(data.subscribers).format('0.0a')} members
        </p>
        <p className="my-3  text-sm font-bold">
          {data.accounts_active > 1000
            ? window?.numeral(data.accounts_active).format('0.0a')
            : data.accounts_active}{' '}
          online
        </p>
      </div>
    </section>
  );
}

export default SubredditInfo;
