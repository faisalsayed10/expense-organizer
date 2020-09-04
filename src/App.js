import React, { useState } from "react";
import Blocks from "./Blocks";
import AddInputs from "./AddInputs";

function App() {
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

  return (
    <div className="text-center">
      <header>
        <h1 className="text-white text-5xl bg-gray-800 p-1 mb-5">Expense Tracker</h1>
      </header>
      <Blocks income={income} expense={expense} />
      <AddInputs
        income={income}
        expense={expense}
        setIncome={setIncome}
        setExpense={setExpense}
      />
    </div>
  );
}

export default App;
