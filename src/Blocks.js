import React from "react";

function Blocks({ income, expense }) {
  return (
    <div className="flex justify-evenly">
      <div className="rounded-lg bg-white p-4">
        <h1 className="text-gray-900 text-3xl w-56">Income</h1>
        <h1 className="text-gray-900 text-5xl w-56">${income}</h1>
      </div>
      <div className="rounded-lg bg-white p-4">
        <h1 className="text-gray-900 text-3xl w-56">Expenses</h1>
        <h1 className="text-gray-900 text-5xl w-56">${expense}</h1>
      </div>
    </div>
  );
}

export default Blocks;
