import React from 'react';
import Card from './context';
import { useState } from 'react';
import UserContext from './context';


function Deposit() {
    const [deposit, setDeposit] = useState('');
    const [balance, setBalance] = useState(0)
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const ctx = React.useContext(UserContext);

    console.log(ctx);


    // function validate(number) {
    //     if(isNaN(number) ) {
    //         alert('Please enter a valid number')
    //         setStatus('Please enter a valid number')
    //         return false;
    //     }
    //     return true;
    // }

    function negativeNum(num){
        if(num <=0) {
            alert('Deposit amount cannot be negative')
            return false;
        }
        return true;
    }

    function handleDeposit() {
        console.log(deposit);
        if(!negativeNum(deposit)) return;
        balance += deposit;
        ctx.users.deposits.push(deposit);
        ctx.users.balance = balance;
        alert(`Successfully deposited ${deposit}. New balance is ${balance}`);    
        setShow(false);
        
        console.log(ctx.users.balance, deposit)
    }
    
    // function handleSubmit(e) {
    //     console.log(deposit);
    //     balance += deposit;
    //     setDeposit(balance);
    //     e.preventDefault();
    //     setStatus(`Deposit of ${deposit} was successful. New balance is: ${balance}`);
    //     alert("Deposit was successful")
    // }

    function clearForm() {
        setDeposit('');
        setShow(true);
    }

    return (
        <Card 
         bgcolor="success"
         txtcolor="white"
         header="Deposit"
         title="Make a Deposit"
        body={show ?  <> 
            Current Balance: ${balance} 
            {/* <label readOnly={false}  onChange={e => setBalance(e.currentTarget.value)}></label> <br/> */}
        <br/>
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
            disabled={isNaN(deposit)}
            onClick={handleDeposit} >Submit Deposit</button>
        
        </>  :  <>
        <h5>Deposit was successful!</h5>
        Current Balance: ${ctx.users[0].balance}
        <br />
        <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit</button>
        </>
        }
        />
     );
}



export default Deposit 