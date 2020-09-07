import React from "react";

function Expenses({ title, income, category }) {
  return (
    <li className="flex flex-row border-l-4 rounded-r-md shadow-md border-red-500 my-5">
      <h1 className="ml-5 text-xl py-1">{title}</h1>
      <h1 className="ml-5 text-xl py-1 font-bold">${income}</h1>
      <h1 className="ml-5 text-xl py-1">{category}</h1>
    </li>
  );
}

export default Expenses;
