import React from "react";
import { useForm } from "react-hook-form";

let expensePlaceholder = "Add expense";
let countExpense = 1;
const inputClass =
  "py-1 md:my-0 px-2 border md:flex-1 md:min-w-0 outline-none border-gray-300 focus:border-gray-700 text-gray-800 text-md rounded-md placeholder-gray-600";
const buttonClass =
  "py-1 px-5 border border-gray-400 bg-black text-white text-md tracking-wide rounded-md outline-none shadow-xl ";

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
    expensePlaceholder = "Add expenses";
  };

  return (
    <>
    <h1 className="text-md text-gray-700 tracking-widest mb-8 uppercase">Expense</h1>
    <form className='flex md:space-y-0 space-y-2 md:space-x-3 md:flex-row flex-col md:justify-between' onSubmit={handleSubmit(handleNewExpense)}>
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
        placeholder="Category"
        className={inputClass}
      ></input>
      <button type="submit" className={buttonClass}>
        ADD
      </button>
    </form>
    </>
  );
}

export default AddExpenseInput;
