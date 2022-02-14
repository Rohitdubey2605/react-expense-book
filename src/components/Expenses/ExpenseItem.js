import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const [amount, setAmount] = useState(props.amount);
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setAmount(0);
    setTitle("No Title Available");
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}></ExpenseDate>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Reset Title and Amount</button>
    </Card>
  );
}

export default ExpenseItem;
