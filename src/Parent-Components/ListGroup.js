import React from 'react'
import IncomeList from '../Components/IncomeList'
import ExpenseList from '../Components/ExpenseList'

function ListGroup({incomes, expenses}) {
    return (
        <div className='flex justify-around'>
            <IncomeList incomes={incomes}/>
            <ExpenseList expenses={expenses}/>
        </div>
    )
}

export default ListGroup
