import './NewExpense.css';
import ExpensesForm from "./ExpensesForm";
import {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
    }
    const showExpenseFormHandler = () => {
        setIsEditing(true);
    }
    const cancelFormHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {isEditing && (
                <ExpensesForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancelForm={cancelFormHandler}/>
            )}
            {!isEditing && (<button onClick={showExpenseFormHandler}>Add New Expense</button> )}
        </div>
    )
}

export default NewExpense;