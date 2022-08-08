import React from 'react';
import Card from './context';
import { useState } from 'react';
import { UserContext }from './context';

function Deposit() {
    const [deposit, setDeposit] = useState('');
    const [balance, setBalance] = useState(0)
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const ctx = React.useContext(UserContext);
    let data = JSON.stringify(ctx.users[0].balance);
    console.log(data);
    console.log(ctx);

    function validate(number) {
        if(isNaN(number) ) {
            alert('Please enter a valid number')
            setStatus('Please enter a valid number')
            return false;
        }
        return true;
    }

    function negativeNum(num){
        if(num < 0) {
            alert('Deposit amount cannot be negative')
            return false;
            
        }
        return true;
    }

    function handleDeposit(amount) {
        console.log(amount);
        if(!negativeNum(amount) || (!validate(amount)))
        return;
        setBalance(data + amount);
        setStatus('');    
        
        ctx.users[0].balance += Number(amount);
        console.log(ctx.users.balance)
        setShow(false);
                
    }

    function clearForm() {
        setDeposit('');
        setShow(true);
    }

    return (
        <Card 
         bgcolor="success"
         txtcolor="white"
         header="Deposits"
         title="Make a Deposit"
        body={show ?  <> 
            <h5>Welcome</h5>
            Current Balance: ${data}
            
      <br/>
        <input 
            type="input" 
            className="form-control" 
            id="deposit" 
            placeholder="Enter Deposit Amount"
            value={deposit}
            onChange={e => setDeposit(e.currentTarget.value)} /> <br/>
            <button 
            type="submit" 
            className="btn btn-light" 
            disabled={deposit === '' || deposit === 0}
            onClick={() => handleDeposit(deposit)} >Submit Deposit</button>
        
        </>  :  <>
        <h5>Deposit was successful!</h5>
        <h6> Current Balance: ${Number(data)}</h6>
        <br />
        <button 
        type="submit" 
        className="btn btn-light" 
        onClick={clearForm} > Make another deposit</button>
        </>
        }
        />
     );
}
export default Deposit 

  
    // function handleSubmit(e) {
    //     console.log(deposit);
    //     balance += deposit;
    //     setDeposit(balance);
    //     e.preventDefault();
    //     setStatus(`Deposit of ${deposit} was successful. New balance is: ${balance}`);
    //     alert("Deposit was successful")
    // }