import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{

        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        
        props.onAddExpress(expenseData);

    }
  return (
    <div className="new-expense">

    <ExpenseForm onSaveExpenseData ={onSaveExpenseDataHandler}/>
      
    </div>
  );
}

export default NewExpense;
