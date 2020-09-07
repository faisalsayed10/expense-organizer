import React from "react";
import { useForm } from "react-hook-form";

let incomePlaceholder = "Add your income";
let countIncome = 1;
const inputClass =
  "ml-4 py-1 px-3 border-2 border-gray-500 focus:border-gray-900 text-gray-800 text-md rounded-md placeholder-gray-900";
const buttonClass =
  "ml-3 py-1 px-6 border-1 border-gray-400 bg-black text-white text-md tracking-wide rounded-md outline-none shadow-xl ";

function AddIncomeInput({ setIncomes, setLimit}) {
  const { handleSubmit, register, reset } = useForm();

  const handleNewIncome = (data) => {
    if (data.income === "") {
      incomePlaceholder = "Required!";
      return;
    } else {
      setLimit(data.income);
      setIncomes((incomes) => [
        ...incomes,
        {
          id: countIncome,
          title: data.incomeTitle,
          income: data.income,
          incomeCateg: data.incomeCateg,
        },
      ]);
      countIncome++;
    }
    reset({
      income: "",
      incomeTitle: "",
      incomeCateg: "",
    });
    incomePlaceholder = "Add your income";
  };

  return (
    <form className="mb-10" onSubmit={handleSubmit(handleNewIncome)}>
      <h1 className="text-3xl">Add Income: </h1>
      <input
        name="income"
        ref={register}
        type="number"
        placeholder={incomePlaceholder}
        className={inputClass}
      ></input>
      <input
        name="incomeTitle"
        ref={register({ required: true })}
        type="text"
        placeholder="Income Title"
        className={inputClass}
      ></input>
      <input
        name="incomeCateg"
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

export default AddIncomeInput;
