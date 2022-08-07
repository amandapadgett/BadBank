import React from 'react';
import Card from './context';
import BankPic from './bank.png';

function Home() {
    return (
        <Card 
         bgcolor="info"
         txtcolor="white"
         header="BadBank"
         title="WELCOME TO THE BANK"
         text="For all your unsecure banking needs."
         body={(<img src={BankPic} style={{ padding: '20px'}} className="img-fluid" alt="banking graphic" />)}
        />
     );
}

export default Home;