import React from "react";
import Incomes from "./Incomes";

function IncomeList({ incomes }) {
  return (
    <ul>
      {incomes.map((elem) => (
        <Incomes
          key={elem.id}
          title={elem.title}
          income={elem.income}
          category={elem.incomeCateg}
        />
      ))}
    </ul>
  );
}

export default IncomeList;
