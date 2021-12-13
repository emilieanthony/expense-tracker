import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.56, date: new Date(2021, 2, 28) },
    { title: "Car Insurance", amount: 294.56, date: new Date(2021, 2, 28) },
    { title: "Insurance", amount: 100.65, date: new Date(2021, 9, 28) },
  ];

  return <Expenses items={expenses} />;
}

export default App;
