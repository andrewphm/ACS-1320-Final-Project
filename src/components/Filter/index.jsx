import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Filter() {
  const [filter, setFilter] = useState('hot');
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="flex flex-col w-[640px] bg-[#1A1A1B] border-[#343536] border rounded-sm p-3 text-white m-auto">
      <div className="flex gap-x-1">
        <button
          onClick={() => {
            setFilter('hot');
            navigate(`${location.pathname}/`);
          }}
          className={`${
            filter === 'hot' && 'bg-neutral-700'
          } px-3 py-1 rounded-3xl text-sm font-bold`}
        >
          <i className="fa-brands fa-hotjar"></i> Hot
        </button>

        <Link to={`/new`}>
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
        </Link>

        <Link to={`/top`}>
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
        </Link>
      </div>
    </section>
  );
}

export default Filter;
