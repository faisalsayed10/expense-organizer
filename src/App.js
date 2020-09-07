import React, { useState } from "react";
import Blocks from "./Parent-Components/Blocks";
import AddInputs from "./Parent-Components/AddInputs";
import ListGroup from "./Parent-Components/ListGroup";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [limit, setLimit] = useState("0");
  const [error, setError] = useState('')

  return (
    <div className="text-center">
      <header>
        <h1 className="text-white text-5xl bg-gray-800 p-1 mb-5">
          Expense Tracker
        </h1>
      </header>
      <Blocks incomes={incomes} expenses={expenses} />
      <AddInputs
        setIncomes={setIncomes}
        setExpenses={setExpenses}
        setLimit={setLimit}
        limit={limit}
        error={error}
        setError={setError}
      />
      <ListGroup incomes={incomes} expenses={expenses}/>
    </div>
  );
}

export default App;
