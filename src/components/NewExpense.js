import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
    const onSaveExpenseDataHandler = (enteredExpenseData) =>{

        const expenseData ={
            ...enteredExpenseData,
            id:Math.random().toString()
        }

        
        props.onAddExpress(expenseData);

        setEditing(false)

    }
    
    const [isEditing, setEditing] = useState(false);

    const handleClick = () =>{

      setEditing(true);

    }

    const stopEditingHandler = () =>{
      setEditing(false)
    }
  return (
    <div className="new-expense">

    {
      !isEditing  && <button onClick={handleClick}>
      Add Expense
    </button>
    }

  
   { isEditing &&  <ExpenseForm onSaveExpenseData ={onSaveExpenseDataHandler} onCancel = {stopEditingHandler}/>}
      
    </div>
  );
}

export default NewExpense;
