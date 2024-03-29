import React, { useState } from "react";
import Card from "./Card";
import './ExpenesItem.css';
import ExpenseDate from "./ExpenseDate";

// to relfect the changes in ui useState is required

function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);

  // const nameChaneHandler = () =>{
  //  setTitle("Updated!");
  // }

  return (
    <Card className="expense-item">
      <ExpenseDate date ={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      {/* <button onClick={nameChaneHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
