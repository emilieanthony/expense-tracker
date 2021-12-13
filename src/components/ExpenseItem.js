import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__descriprion">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
