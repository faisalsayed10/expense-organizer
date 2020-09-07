import React from "react";
import { useForm } from "react-hook-form";

let expensePlaceholder = "Add your expense";
let countExpense = 1;
const inputClass =
  "ml-4 py-1 px-2 border w-28 outline-none border-gray-300 focus:border-gray-700 text-gray-800 text-md rounded-md placeholder-gray-600";
const buttonClass =
  "ml-3 py-1 px-5 border border-gray-400 bg-black text-white text-md tracking-wide rounded-md outline-none shadow-xl ";

function AddExpenseInput({ setExpenses }) {
  const { handleSubmit, register, reset } = useForm();

  const handleNewExpense = (data) => {
    if (data.expense === "") {
      expensePlaceholder = "Required!";
      return;
    } else {
      setExpenses((expenses) => [
        ...expenses,
        {
          id: countExpense,
          title: data.expenseTitle,
          expense: data.expense,
          expenseCateg: data.expenseCateg,
        },
      ]);
      countExpense++;
    }
    reset({
      expense: "",
      expenseTitle: "",
      expenseCateg: "",
    });
    expensePlaceholder = "Add your expenses";
  };

  return (
    <form className="mb-10" onSubmit={handleSubmit(handleNewExpense)}>
      <h1 className="text-3xl">Add Expenses: </h1>
      <input
        name="expense"
        ref={register}
        type="number"
        placeholder={expensePlaceholder}
        className={inputClass}
      ></input>
      <input
        name="expenseTitle"
        ref={register({ required: true })}
        type="text"
        placeholder="Expense Title"
        className={inputClass}
      ></input>
      <input
        name="expenseCateg"
        ref={register({ required: true })}
        type="text"
        placeholder="Add to a Category"
        className={inputClass}
      ></input>
      <button type="submit" className={buttonClass}>
        ADD
      </button>
    </form>
  );
}

export default AddExpenseInput;
