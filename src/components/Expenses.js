import React, { useState } from 'react';
import Card from './Card';
import ExpenseItem from './ExpenseItem';

import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    console.log('selectedYear: ', selectedYear);    
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.item.filter((c) =>  {
    return c.date.getFullYear().toString() === filteredYear
  }) 

return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpensesChart expenses = {filteredExpenses}/>
        {
          filteredExpenses.length === 0 ? <p className='notFound'>No Expenses Found</p> :  filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
        }
       
      </Card>
    </div>
  );
};

export default Expenses;

// import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
// import "./Expense.css";
// import Card from "./Card";
// import ExpensesFilter from "./ExpenseFilter";

// function Expenses(props) {
//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filterExpenses = props.items.filter(expense =>{
//     return expense.date.getFullYear().toString() === filteredYear
//   })
//   return (
//     <div>
//       <Card className="expenses">
//         <ExpensesFilter
//           selected={filteredYear}
//           onChangeFilter={filterChangeHandler}
//         />

//         {/* {props.item.map((expense,index) => ( */}
//         {filterExpenses.map((expense) => (
//           <ExpenseItem
//             key = {expense.id}
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           />
//         ))}

//         {/* <ExpenseItem
//           title={props.item[0].title}
//           amount={props.item[0].amount}
//           date={props.item[0].date}
//         />

//         <ExpenseItem
//           title={props.item[1].title}
//           amount={props.item[1].amount}
//           date={props.item[1].date}
//         />

//         <ExpenseItem
//           title={props.item[2].title}
//           amount={props.item[2].amount}
//           date={props.item[2].date}
//         />

//         <ExpenseItem
//           title={props.item[3].title}
//           amount={props.item[3].amount}
//           date={props.item[3].date}
//         /> */}
//       </Card>
//     </div>
//   );
// }

// export default Expenses;
