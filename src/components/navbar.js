import { NavLink } from 'react-router-dom';
import React from 'react';
 
function NavBar() {
      
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? '#f8b023' : '#555'
        }
    }
    
    return (
       
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" >
        
            <NavLink className="navbar-brand" to="/"> BadBank</NavLink>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

            <div className="collapse navbar-collapse" id="navbarNav" >

                <ul className="navbar-nav">
                    <li className="nav-item">
                    <NavLink  
                    to='/' 
                    style={navLinkStyles} 
                    className="nav-link" 
                    aria-current="page"
                    > Home </NavLink>
                    <span>Return Home</span>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                        to='/createaccount/' 
                        style={navLinkStyles} 
                        className="nav-link" 
                        >Create Account</NavLink>
                        <span>Create an Account</span>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                        to="/deposit/" 
                        style={navLinkStyles} 
                        className="nav-link"
                        >Deposit</NavLink>
                        <span>Make a Deposit</span>
                    </li>

                    <li className="nav-item">
                        <NavLink  
                        to="/withdraw/" 
                        className="nav-link"
                        style={navLinkStyles}
                        >Withdraw</NavLink>
                        <span>Make a Withdrawal</span>
                    </li>

                    <li className="nav-item">
                        <NavLink 
                        to="/alldata/" 
                        style={navLinkStyles} 
                        className="nav-link"
                        >All Data</NavLink>
                        <span>View All Bank Data</span>
                    </li>
                    
                    {/* <li className="nav-item">
                    <NavLink style={navLinkStyles} className="nav-link" to="/login/"><span>Login to your account at Bad Bank account.</span>Login</NavLink>
                    </li> */}
            
                </ul>
            </div>  
        </div>
    </nav> 
  
        
    );
}

export default NavBar;

