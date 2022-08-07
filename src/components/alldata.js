import React from 'react';
//import Card from './context';
import { UserContext } from './context'

function AllData() {
    const ctx = React.useContext(UserContext);
    console.log(ctx);

    return (
        <>
        <div className="card w-75" >
            <div className="card-body" bgcolor="secondary">
            <h5 className="card-title">All Account Data at BadBank</h5>
            <p className="card-text">{JSON.stringify(ctx)}</p>
            {/* <a href="#" class="btn btn-primary">Button</a> */}
            </div>
        </div> 
        </>
     );
}

export default AllData;

