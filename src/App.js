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
    <>
      <header className='p-5 text-white text-5xl text-center bg-gray-800'>
        <h1 className="">
          Expense Tracker
        </h1>
      </header>
      <main className=" p-16">
        <Blocks incomes={incomes} expenses={expenses} />
        <AddInputs
          setIncomes={setIncomes}
          setExpenses={setExpenses}
          setLimit={setLimit}
          expenses={expenses}
          incomes={incomes}
          setError={setError}
        />
      </main>
    </>
  );
}

export default App;
