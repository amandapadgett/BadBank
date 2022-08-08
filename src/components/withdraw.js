import React from 'react';
import Card from './context';
import { UserContext } from './context';
import { useContext} from 'react';
import { useState} from 'react';


function Withdraw() {

    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [withdraw, setWithdraw] = useState('');
    const [balance, setBalance] = useState('');
    const ctx = useContext(UserContext);
    let data = JSON.stringify(ctx.users[ctx.users.length - 1].balance);
    console.log(data);
    console.log(ctx);

     function validate(number) {
        if(isNaN(number)) { 
            setStatus('Error: Please enter a valid number');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }


    function handleWithdrawal(amount) {
        console.log(amount);
        if(!validate(amount))
        return;
        setBalance(data - amount);
        //setStatus; --breaks when I have this 
        ctx.users[ctx.users.length -1].balance -= Number(amount);
        console.log(ctx.users.balance)
        // ctx.users.push({withdraw});
        setShow(false);
    }

    function clearForm() {
        setWithdraw('');
        setShow(true)
    }

    return (
        <Card 
         bgcolor="secondary"
         txtcolor="white"
         header="Withdrawals"
         title="Make a Withdrawal"
         status={status} 
         body={
            show ? (
                <>
                Current Balance: ${data} <br />
                <br />
                <input 
                type="input" 
                className="form-control"
                id="withdraw"
                placeholder="Enter Amount"
                value={withdraw}
                onChange={e => setWithdraw(e.currentTarget.value)} />
                <br/>
                <button 
                type="submit"
                className="btn btn-light"
                disabled={withdraw === '' || withdraw < 0}
                onClick={() => handleWithdrawal(withdraw)}>Withdraw</button>
                </>
            ) : (
                <>
                <h5>Success!</h5>
                Current Balance: ${data} <br />
                <br />
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal</button>
                </>
            )
         }
       
        />
     );
}

export default Withdraw;