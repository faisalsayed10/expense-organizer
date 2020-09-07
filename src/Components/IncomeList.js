import React from "react";
import Incomes from "./Incomes";

function IncomeList({ incomes }) {
  return (
    <ul>
      <h1 className="text-5xl mb-10">INCOMES HISTORY</h1>
      {incomes.map((elem) => (
        <Incomes
          number={elem.id}
          title={elem.title}
          income={elem.income}
          category={elem.incomeCateg}
        />
      ))}
    </ul>
  );
}

export default IncomeList;
