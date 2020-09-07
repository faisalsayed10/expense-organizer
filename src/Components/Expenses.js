import React from "react";

const itemClass = 'flex overflow-hidden items-baseline justify-between border-l-4 rounded-r-md shadow-md border-red-500 my-5 p-4'

function Expenses({ title, income, category }) {
  return (
    <li className={itemClass}>
      <h1 className="text-2xl font-semibold">${income}</h1>
      <p className='flex'>
      <span className="text-sm text-gray-600 px-1">{title}</span>
      <span className="text-sm text-gray-600 px-1">{category}</span>
      </p>
    </li>
  );
}

export default Expenses;
