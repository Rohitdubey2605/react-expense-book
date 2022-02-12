import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: "id1",
      title: "Earphone",
      amount: 1392,
      date: new Date(2022, 1, 14),
    },
    {
      id: "id2",
      title: "Wire",
      amount: 32,
      date: new Date(2022, 1, 17),
    },
    {
      id: "id3",
      title: "Laptop",
      amount: 57392,
      date: new Date(2022, 1, 24),
    },
    {
      id: "id4",
      title: "Pen",
      amount: 20,
      date: new Date(2022, 1, 31),
    },
  ];

  // Old Way
  // alternative of JSX using React Object
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started"),
  //   React.createElement(Expenses,{expenses: expenses})
  // ); 
  
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
