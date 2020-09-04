import React from "react";
import { useForm } from "react-hook-form";

function AddInputs({ setIncome, setExpense, income, expense }) {
  const { handleSubmit, register } = useForm();
  const handelNewIncome = (data) => {
    setIncome((income) => [...income, data.income]);
  };

  const handelNewExpense = (data) => {
    setExpense((expense) => [...expense, data.expense]);
  };

  return (
    <div className="flex justify-evenly my-12">
      <form onSubmit={handleSubmit(handelNewIncome)}>
        <h1 className="text-3xl">Add Income: </h1>
        <input
          name="income"
          ref={register}
          type="number"
          placeholder="Add your income"
          className="w-56 h-8 border-2 border-gray-900 text-gray-800 text-xl pl-2 rounded-sm"
        ></input>
        <button
          type="submit"
          className="ml-6 bg-green-400 rounded-md outline-none shadow-xl border-1 border-gray-900 w-20 h-8"
        >
          ADD
        </button>
      </form>
      <form onSubmit={handleSubmit(handelNewExpense)}>
        <h1 className="text-3xl">Add Expense: </h1>
        <input
          name="expense"
          ref={register}
          type="number"
          placeholder="Add your expenses"
          className="w-56 h-8 border-2 border-gray-900 text-gray-800 text-xl pl-2 rounded-sm"
        ></input>
        <button
          type="submit"
          className="ml-6 bg-red-700 rounded-md outline-none shadow-xl border-1 border-gray-900 w-20 h-8"
        >
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddInputs;
