import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((data) => {
    return data.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onFilterChange={filterChangeHandler}
        ></ExpensesFilter>

        {/* {filteredExpenses.length === 0 ? (
        <p>No expense found.</p>
      ) : (
        filteredExpenses.map((expenseData) => {
          return (
            <ExpenseItem
              key={expenseData.id}
              title={expenseData.title}
              date={expenseData.date}
              amount={expenseData.amount}
            ></ExpenseItem>
          );
        })
      )} */}

        {/* Better Way */}
        {/* {filteredExpenses.length === 0 && <p>No expense found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expenseData) => {
          return (
            <ExpenseItem
              key={expenseData.id}
              title={expenseData.title}
              date={expenseData.date}
              amount={expenseData.amount}
            ></ExpenseItem>
          );
        })} */}

        {/* Or Directly use the above variable */}

        <ExpensesList items={filteredExpenses}></ExpensesList>

        {/* <ExpenseItem
        title={props.expenses[0].title}
        date={props.expenses[0].date}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[1].title}
        date={props.expenses[1].date}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        date={props.expenses[2].date}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        date={props.expenses[3].date}
        amount={props.expenses[3].amount}
      ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
