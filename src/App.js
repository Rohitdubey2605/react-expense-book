import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Chart from "./components/Chart/Chart";

const initialExpenses = [
  {
    id: "id1",
    title: "Earphone",
    amount: 1392,
    date: new Date(2022, 1, 14),
  },
  {
    id: "id2",
    title: "Wire",
    amount: 320,
    date: new Date(2022, 0, 17),
  },
  {
    id: "id3",
    title: "Laptop",
    amount: 592,
    date: new Date(2022, 2, 24),
  },
  {
    id: "id4",
    title: "Pen",
    amount: 200,
    date: new Date(2022, 5, 31),
  },
];

function App() {
  const [newExpenses, setNewExpenses] = useState(initialExpenses);

  // Old Way
  // alternative of JSX using React Object
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses,{expenses: expenses})
  // );

  const addExpenseHandler = (expense) => {
    //initialExpenses.push(expense);
    console.log(initialExpenses);
    setNewExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      {/* <Chart></Chart> */}
      <Expenses expenses={newExpenses}></Expenses>
    </div>
  );
}

export default App;
