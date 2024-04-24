import React from 'react';

const PageCard = (props) => {
  return (
    <div className="max-w-md m-5 w-fit rounded-xl border border-1 shadow-[1px_1px_1px_1px_rgba(0,0,1,0)]">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.data.title}</div>
        <p className="text-gray-700 w-parent text-base whitespace-normal">
          {props.data.description}
        </p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-[#197878] border border-[#197878] hover:text-[#197878] hover:bg-white text-white font-bold py-2 px-4 rounded">
          {props.data.action}
        </button>
      </div>
    </div>
  );
};

export default PageCard;
