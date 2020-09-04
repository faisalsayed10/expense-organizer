import React from "react";

const blockClass = "rounded-lg shadow-2xl p-4"

function Blocks({ income, expense }) {

  let totalExpense = 0;
  if (expense.length > 0) {
    totalExpense = expense.reduce((a, b) => a + parseInt(b), 0);
    console.log(totalExpense)
  }

  let totalIncome = 0;
  if (income.length > 0) {
    totalIncome = income.reduce((a, b) => a + parseInt(b), 0);
    console.log(totalIncome)
  }


  return (
    <div className="flex justify-evenly">
      <div className={blockClass}>
        <h1 className="text-3xl w-56">Income</h1>
        <h1 className="text-5xl w-56">${totalIncome}</h1>
      </div>
      <div className={blockClass}>
        <h1 className="text-3xl w-56">Expenses</h1>
        <h1 className="text-5xl w-56">${totalExpense}</h1>
      </div>
    </div>
  );
}

export default Blocks;
