import React from "react";
import IncomeList from "../Components/IncomeList";
import ExpenseList from "../Components/ExpenseList";

function ListGroup({ incomes, expenses }) {
  return (
    <div className="flex md:flex-row flex-col">
      <div className='md:w-1/2 w-full flex-1 px-10'>

      <IncomeList incomes={incomes} />
      </div>
      <div className='md:w-1/2 w-full flex-1 px-10'>

      <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default ListGroup;
