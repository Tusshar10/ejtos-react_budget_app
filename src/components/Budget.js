import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const changebudget=(q)=>
    {
        if(q>20000)
        {
            alert('Budget should not be more than 20000');
            return;
        }
        else if(q<totalExpenses)
        {
            alert(`Budget can't be less than spending.`);
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload:q
        });
    }
    const { budget,dispatch,currency } = useContext(AppContext);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input type="number" step="10" value={budget} onChange={(e)=>changebudget(e.target.value)}/></span>
        </div>
    );
};
export default Budget;
