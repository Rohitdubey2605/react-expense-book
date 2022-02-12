import "./ExpenseItem.css";

function ExpenseItem() {

    const expenseDate = new Date(2022,1,12);
    const expenseTitle = 'Term Insurance';
    const expenseAmount = 1867;

  return (
    <div className="expense-item">
      <div>{expenseDate.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
