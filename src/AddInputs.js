import React from "react";
import { useForm } from "react-hook-form";

let countIncome = 0;
let countExpense = 0;
let incomePlaceholder = "Add your income";
let expensePlaceholder = "Add your expenses";
const inputClass =
  "ml-2 py-2 px-6 border-2 border-gray-500 focus:border-gray-900 text-gray-800 text-md rounded-md placeholder-gray-900";
const buttonClass =
  "ml-3 py-2 px-6 border-1 border-gray-400 bg-black text-white text-md tracking-wide rounded-md outline-none shadow-xl ";

function AddInputs({ setIncomes, setExpenses, setLimit, setError, limit, error }) {
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
    reset()
  };

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
      expense: '',
      expenseTitle: '',
      expenseCateg: '',
    })
  };

  const handleExpenseLimit = (data) => {
      setLimit(data.limit);
      reset({
        limit: ''
      })
    }

  const checkLimit = (data) => {
    if(data.expense > data.limit) {
      console.log('Working')
    }
  }



  return (
    <div className="my-12">
      <form className="my-10" onSubmit={handleSubmit(handleNewIncome)}>
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
          ref={register}
          type="text"
          placeholder="Income Title"
          className={inputClass}
        ></input>
        <input
          name="incomeCateg"
          ref={register}
          type="text"
          placeholder="Add to a Category"
          className={inputClass}
        ></input>
        <button type="submit" className={buttonClass}>
          ADD
        </button>
      </form>

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
          ref={register}
          type="text"
          placeholder="Expense Title"
          className={inputClass}
        ></input>
        <input
          name="expenseCateg"
          ref={register}
          type="text"
          placeholder="Add to a Category"
          className={inputClass}
        ></input>
        <button type="submit" className={buttonClass}>
          ADD
        </button>
      </form>

      <form onSubmit={handleSubmit(handleExpenseLimit)}>
        <h1 className="text-3xl">Set an expenditure limit: </h1>
        <input
          name="limit"
          ref={register}
          type="number"
          placeholder="Add a limit"
          className={inputClass}
        ></input>
        <button type="submit" className={buttonClass}>
          ADD
        </button>
      </form>
    </div>
  );
}

export default AddInputs;
