import "./ExpenseItem.css";

function ExpenseItem() {
  
    const expenseDate = new Date(2022, 9, 17);
    const expenseTitle = "Car Insurance";
    const expenseAmount = 1200;


  return(
  <div className="expense-item">
    <div>{expenseDate}</div>
    <div className = "expense-item__description">
      <h2>{expenseTitle}</h2>
      <div className="expense-item__price">${expenseAmount}</div>
    </div>
  </div>
  );
}

export default ExpenseItem;
