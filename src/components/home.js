import React from 'react';
import Card from './context';
import BankPicWhite from './bank_white.png'
import { NavLink } from 'react-router-dom';

function Home() {
    return (
        <Card 
            bgcolor="info"
            txtcolor="white"
            header="BadBank"
            title="WELCOME TO A VERY BAD BANK"
            text="We are here for all your unsecure banking needs."
            body={(<>
                <img 
                src={BankPicWhite} 
                style={{ padding: '20px'}} 
                className="img-fluid" 
                alt="banking graphic" />
                <br/>
                <button
                type="submit" 
                className="btn btn-info">
                    <NavLink 
                    style={{ color: 'rgb(192, 235, 193)'}} 
                    to="/createaccount/">
                        Open an Account Today
                    </NavLink>
                </button>
                </>)}
           
        />
     );
}

export default Home;