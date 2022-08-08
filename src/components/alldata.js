import React from 'react';
import { UserContext } from './context'



function AllData() {
    const ctx = React.useContext(UserContext);
    
    const DisplayData = ctx.users.map(
        (user)=> {
            return(
                <tr>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.balance}</td>
                </tr>
            )
        }
    )

    return (
        <div>
            <table className="table table-striped">
            <thead>
                <tr>
               
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {DisplayData}
            </tbody>
            </table>
        </div> 
    )
}

export default AllData

// function AllData() {
//     const ctx = React.useContext(UserContext);
//     console.log(ctx);

//     return (
//         <>
//         <div className="card w-75" >
//             <div className="card-body" bgcolor="secondary">
//             <h5 className="card-title">All Account Data at BadBank</h5>
//             <p className="card-text">{JSON.stringify(ctx)}</p>
//             {/* <a href="#" class="btn btn-primary">Button</a> */}
//             </div>
//         </div> 
//         </>
//      );
// }

// export default AllData;

