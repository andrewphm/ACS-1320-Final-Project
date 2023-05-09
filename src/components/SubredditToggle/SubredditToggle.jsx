import React, { useState } from 'react';

function SubredditToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-10 right-10 z-10 w-20 h-20">
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline sm:hidden"
      >
        <div className="transform ">Subreddits</div>
      </button>
      {isOpen && (
        <div className="bg-white w-screen h-screen sm:hidden">
          {/* Your mobile menu or content goes here */}
        </div>
      )}
    </div>
  );
}

export default SubredditToggle;
