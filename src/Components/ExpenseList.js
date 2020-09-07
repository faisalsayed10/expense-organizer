import React from "react";
import Expenses from "./Expenses";

function ExpenseList({ expenses }) {
  return (
    <ul>
      <h1 className="text-4xl mb-10">EXPENSES HISTORY</h1>
      {expenses.map((elem) => (
        <Expenses
          key={elem.id}
          title={elem.title}
          income={elem.expense}
          category={elem.expenseCateg}
        />
      ))}
    </ul>
  );
}

export default ExpenseList;
