import React from 'react';

function Filter() {
  return (
    <section className="flex flex-col gap-x-2 w-[619px] text-white m-auto">
      <div className="flex ">
        <button>
          <i className="fa-brands fa-hotjar"></i> Hot
        </button>
        <button>New</button>
        <button>
          <i className="fa-solid fa-trophy"></i> Top
        </button>
      </div>
    </section>
  );
}

export default Filter;
