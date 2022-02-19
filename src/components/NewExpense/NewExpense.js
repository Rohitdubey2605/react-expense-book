import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isFromVisible, setIsFormVisible] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  function ShowExpenseForm() {
    setIsFormVisible(true);
  }

  const updateIsFormVisible = (data) =>
  {
      setIsFormVisible(data);
  } 

  return (
    <div className="new-expense">
      {isFromVisible ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={updateIsFormVisible}></ExpenseForm>
      ) : (
        <button onClick={ShowExpenseForm}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
