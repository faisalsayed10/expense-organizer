import React from "react";
import { useForm } from "react-hook-form";

let incomePlaceholder = "Add income";
let countIncome = 1;
const inputClass =
  "py-1 my-1 md:my-0 px-2 border md:flex-1 md:min-w-0 outline-none border-gray-300 focus:border-gray-700 text-gray-800 text-md rounded-md placeholder-gray-600";
const buttonClass =
  "py-1 px-5 border border-gray-400 bg-black text-white text-md tracking-wide rounded-md outline-none shadow-xl ";

function AddIncomeInput({ setIncomes, setLimit }) {
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
    incomePlaceholder = "Add income";
  };

  return (
    <>
      <h1 className="text-md text-gray-700 tracking-widest mb-8 uppercase">Income</h1>
    <form className='flex md:space-y-0 space-y-2 md:space-x-3 md:flex-row flex-col md:justify-between' onSubmit={handleSubmit(handleNewIncome)}>
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

export default AddIncomeInput;
