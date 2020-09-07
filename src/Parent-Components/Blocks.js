import React, { useState, useEffect } from "react";

const blockClass = "rounded-lg shadow-2xl p-4";

let totalExpense = 0;
let totalIncome = 0;
let incomeAmtArr = [];
let expenseAmtArr = [];

function Blocks({ incomes, expenses }) {
  const [balance, setBalance] = useState(0);

  console.log({ balance, incomes, expenses });

  if (expenses.length > 0) {
    //Extracting the amount from the object
    expenseAmtArr = expenses.map((expense) => expense.expense);
    //Summing up the amount
    totalExpense = expenseAmtArr.reduce((a, b) => parseInt(a) + parseInt(b));
  }

  if (incomes.length > 0) {
    //Extracting the amount from the object
    incomeAmtArr = incomes.map((income) => income.income);
    //Summing up the amount
    totalIncome = incomeAmtArr.reduce((a, b) => parseInt(a) + parseInt(b));
  }

  useEffect(() => {
    let remainder = totalIncome - totalExpense;

    if (incomeAmtArr.length >= 0 && expenseAmtArr.length >= 0) {
      setBalance(remainder);
    }

  }, [incomes, expenses]);

  return (
    <div className="flex justify-evenly">
      <div className={blockClass}>
        <h2 className="text-3xl w-56">Income</h2>
        <h1 className="text-5xl w-56">${totalIncome}</h1>
      </div>
      <div className={blockClass}>
        <h2 className="text-3xl w-56">Expenses</h2>
        <h1 className="text-5xl w-56">${totalExpense}</h1>
      </div>
      <div className={blockClass}>
        <h2 className="text-3xl w-56">Balance</h2>
        <h1 className="text-5xl w-56">${balance}</h1>
      </div>
    </div>
  );
}

export default Blocks;
