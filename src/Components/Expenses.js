import React from 'react'

function Expenses({number, title, income, category }) {
    return (
        <li className='flex flex-row'>
        <h1 className='ml-5 text-3xl'>{number}.</h1>
        <h1 className='ml-5 text-3xl'>{title}</h1>
        <h1 className='ml-5 text-3xl font-bold'>${income}</h1>
        <h1 className='ml-5 text-3xl'>{category}</h1>
      </li>
    )
}

export default Expenses
