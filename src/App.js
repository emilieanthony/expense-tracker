import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Rent",
    amount: 7568,
    date: new Date(2022, 0, 28),
  },
  {
    id: "e2",
    title: "Gym",
    amount: 399,
    date: new Date(2022, 0, 25),
  },
  {
    id: "e3",
    title: "Insurance",
    amount: 852,
    date: new Date(2022, 0, 25),
  },
  {
    id: "e4",
    title: "Rent",
    amount: 7568,
    date: new Date(2022, 1, 28),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
