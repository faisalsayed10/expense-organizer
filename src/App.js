import React, { useState } from "react";
import Blocks from "./Blocks";

function App() {
  const [income, setIncome] = useState([0]);
  const [expense, setExpense] = useState([0])

  return (
    <div className="text-center">
      <header>
        <h1 className="text-5xl">Expense Tracker</h1>
      </header>
      <Blocks income={income} expense={expense} />
    </div>
  );
}

export default App;
