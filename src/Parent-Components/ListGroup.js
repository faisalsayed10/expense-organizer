import React from "react";
import IncomeList from "../Components/IncomeList";
import ExpenseList from "../Components/ExpenseList";

function ListGroup({ incomes, expenses }) {
  return (
    <div className="flex">
      <div className='w-1/2 flex-1 px-10'>

      <IncomeList incomes={incomes} />
      </div>
      <div className='w-1/2 flex-1 px-10'>

      <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default ListGroup;
