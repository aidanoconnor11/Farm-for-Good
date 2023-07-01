//import styles from './Logout.css'; 
//import React, { Component } from 'react';
function click(){
    alert("I have been touched");
  }

const LogOut = () => {
    return ( 
        <div>
            <h1>
                Logout page 
            </h1>
            <h3>
                User's Full Name
            </h3>
            <button onclick={click}>
                Logout
            </button>
        </div>
     );
}
 
export default LogOut;