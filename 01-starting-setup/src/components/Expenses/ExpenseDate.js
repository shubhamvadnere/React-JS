import "./ExpenseDate.css";

const ExpenseDate = (props) => {

    // const date = new Date();
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString("en-US", { day: "2-digit" });
    // const month = date.getMonth("long");
    const month = props.date.toLocaleString("en-US", { month: "long" });
    return(
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
      </div>
    );
}


export default ExpenseDate;