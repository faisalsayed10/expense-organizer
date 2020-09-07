import React from "react";

function Incomes({ title, income, category }) {
  return (
    <li className="flex flex-row border-l-4 shadow-md rounded-r-md border-green-500 my-5">
      <h1 className="ml-5 text-xl py-1">{title}</h1>
      <h1 className="ml-5 text-xl py-1 font-bold">${income}</h1>
      <h1 className="ml-5 text-xl py-1">{category}</h1>
    </li>
  );
}

export default Incomes;
