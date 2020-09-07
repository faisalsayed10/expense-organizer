import React from "react";
import Expenses from "./Expenses";

function ExpenseList({ expenses }) {
  return (
    <ul>
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
