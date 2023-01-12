import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import {useState} from "react";

const App = () => {
    const DUMMY_EXPENSES = [
        {
            id: '1',
            title: 'Car insurance',
            date: new Date(2021 , 2, 1),
            price: 245.00
        },
        {
            id: '2',
            title: 'Car insurance 1',
            date: new Date(2022, 7, 1),
            price: 25.00
        }, {
            id: '3',
            title: 'Car insurance 2',
            date: new Date(2022, 5, 1),
            price: 24.00
        }
    ];

    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = expense => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    }

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
