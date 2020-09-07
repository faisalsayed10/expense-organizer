import React, { useEffect } from "react";
import AddIncomeInput from "../Components/AddIncomeInput";
import AddExpenseInput from "../Components/AddExpenseInput";

function AddInputs({ setIncomes, setLimit, setExpenses }) {

  return (
    <div className="my-12 flex flex-row justify-around">
      <AddIncomeInput setIncomes={setIncomes} setLimit={setLimit} />
      <AddExpenseInput setExpenses={setExpenses} />
    </div>
  );
}

export default AddInputs;
