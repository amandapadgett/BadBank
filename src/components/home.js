import React from 'react';
import Card from './context';
import BankPic from './bank.png';
import BankPicWhite from './bank_white.png'

function Home() {
    return (
        <Card 
         bgcolor="info"
         txtcolor="white"
         header="BadBank"
         title="WELCOME TO A VERY BAD BANK"
         text="We are here for all your unsecure banking needs."
         body={(<img src={BankPicWhite} style={{ padding: '20px'}} className="img-fluid" alt="banking graphic" />)}
        />
     );
}

export default Home;