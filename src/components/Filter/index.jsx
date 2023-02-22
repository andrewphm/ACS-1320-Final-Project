import React, { useState } from 'react';

function Filter() {
  const [filter, setFilter] = useState('hot');

  return (
    <section className="flex flex-col w-[640px] bg-[#1A1A1B] border-[#343536] border rounded-sm p-3 text-white m-auto">
      <div className="flex gap-x-1">
        <button
          onClick={() => {
            setFilter('hot');
          }}
          className={`${
            filter === 'hot' && 'bg-neutral-700'
          } px-3 py-1 rounded-3xl text-sm font-bold`}
        >
          <i className="fa-brands fa-hotjar"></i> Hot
        </button>
        <button
          onClick={() => {
            setFilter('new');
          }}
          className={`${
            filter === 'new' && 'bg-neutral-700'
          } px-3 py-1 rounded-3xl text-sm font-bold`}
        >
          <i className="fa-solid fa-file"></i> New
        </button>
        <button
          onClick={() => {
            setFilter('top');
          }}
          className={`${
            filter === 'top' && 'bg-neutral-700'
          } px-3 py-1 rounded-3xl text-sm font-bold`}
        >
          <i className="fa-solid fa-trophy"></i> Top
        </button>
      </div>
    </section>
  );
}

export default Filter;
