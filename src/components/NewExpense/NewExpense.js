import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function AddExpense()
{
    return (
        <div className='new-expense'>
            <ExpenseForm></ExpenseForm>
        </div>        
    );
}

export default AddExpense;