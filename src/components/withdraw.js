import React from 'react';
import Card from './context';
import { UserContext } from './context';
import { useContext} from 'react';
import { useState} from 'react';


function Withdraw() {

    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [withdraw, setWithdraw] = useState('');
    const ctx = useContext(UserContext);

     function validate(number) {
        if(isNaN(number)) { 
            setStatus('Error: Please enter a valid number');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }


    function handleWithdrawal() {
        console.log(withdraw);
        if(!validate(withdraw, 'withdraw'))
        return;
        ctx.users.push({withdraw});
        setShow(false);
    }

    function clearForm() {
        setWithdraw('');
        setShow(true)
    }

    return (
        <Card 
         bgcolor="info"
         txtcolor="white"
         header="Withdrawals"
         title="Make a Withdrawal"
         status={status} 
         body={
            show ? (
                <>
                Withdrawal Amount
                <br/>
                <input 
                type="input" 
                className="form-control"
                id="withdraw"
                placeholder="Enter Withdrawal Amount"
                value={withdraw}
                onChange={e => setWithdraw(e.currentTarget.value)} />
                <br/>
                <button 
                type="submit"
                className="btn btn-light"
                disabled={withdraw === '' || withdraw < 0}
                onClick={handleWithdrawal}>Withdraw</button>
                </>
            ) : (
                <>
                <h5>Withdrawal was successful</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
                </>
            )
         }
       
        />
     );
}

export default Withdraw;