import React from "react";
import Incomes from "./Incomes";

function IncomeList({ incomes }) {
  return (
    <ul>
      <h1 className="text-4xl mb-10">INCOMES HISTORY</h1>
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
