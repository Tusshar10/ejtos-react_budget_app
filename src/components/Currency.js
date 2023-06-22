import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency=()=>
{
    const handlecur=(s)=>
    {
        dispatch({
            type: 'CHG_CURRENCY',
            payload:s
        });
    }
    const { currency,dispatch } = useContext(AppContext);
    return(
        <div className="alert alert-secondary">
    <select onChange={(e)=>handlecur(e.target.value)} className="col-xs-2" style={{backgroundColor:'rgb(144,238,144)'}} aria-label="Default select example">
    <option className="alert alert-success" value="€">Euro(€)</option>
    <option className="alert alert-success" value="$">Dollar($)</option>
        <option className="alert alert-success" value="£">Pound(£)</option>
        <option className="alert alert-success" value="₹">Rupee(₹)</option>
    </select>
    </div>
    );
}
export default Currency;
