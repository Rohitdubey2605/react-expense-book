import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expenseData) => {
        return (
          <ExpenseItem
            key={expenseData.id}
            title={expenseData.title}
            date={expenseData.date}
            amount={expenseData.amount}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpensesList;
