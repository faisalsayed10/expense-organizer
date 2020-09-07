import React, { useState, useEffect } from "react";
import Blocks from "./Parent-Components/Blocks";
import AddInputs from "./Parent-Components/AddInputs";
import ListGroup from "./Parent-Components/ListGroup";

function App() {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [limit, setLimit] = useState("0");
  const [error, setError] = useState("");

  const setLocalStorage = () => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
    localStorage.setItem("expenses", JSON.stringify(expenses));
  };

  const getLocalStorageIncomes = () => {
    if (localStorage.getItem("incomes") === null) {
      localStorage.setItem("incomes", JSON.stringify([]));
    } else {
      let localIncome = JSON.parse(localStorage.getItem("incomes"));
      setIncomes(localIncome);
    }
  };

  const getLocalStorageExpenses = () => {
    if (localStorage.getItem("expenses") === null) {
      localStorage.setItem("expenses", JSON.stringify([]));
    } else {
      let localExpenses = JSON.parse(localStorage.getItem("expenses"));
      setExpenses(localExpenses);
    }
  };

  useEffect(() => {
    getLocalStorageIncomes();
    getLocalStorageExpenses();
  }, []);

  useEffect(() => {
    setLocalStorage();
  }, [expenses, incomes]);

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
      <ListGroup incomes={incomes} expenses={expenses} />
    </div>
  );
}

export default App;
