import React from "react";
import AddIncomeInput from "../Components/AddIncomeInput";
import AddExpenseInput from "../Components/AddExpenseInput";
import ListGroup from "./ListGroup";

function AddInputs({ setIncomes, setLimit, setExpenses, incomes, expenses }) {
  return (
    <div className="my-5 flex md:flex-no-wrap flex-wrap flex-col">
      <div className="flex md:flex-row flex-col">
        <div className="md:w-1/2 flex-1 md:px-10 py-16">
          <AddIncomeInput setIncomes={setIncomes} setLimit={setLimit} />
        </div>
        <div className="md:w-1/2 flex-1 md:px-10 py-16">
          <AddExpenseInput setExpenses={setExpenses} />
        </div>
      </div>
      <ListGroup incomes={incomes} expenses={expenses} />
    </div>
  );
}

export default AddInputs;
