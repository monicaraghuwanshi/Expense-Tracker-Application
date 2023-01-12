import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from "./ExpensesFilter/ExpenseFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2022');

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    const filterChangeHandler = (filterValue) => {
        setFilteredYear(filterValue);
    }

    return (
        <li>
            <Card className={'expenses'}>
                <ExpenseFilter selected={filteredYear} filterChangeHandler= {filterChangeHandler}/>
                <ExpensesChart expenses ={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </li>
    );
}

export default Expenses;