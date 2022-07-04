import React from 'react';
import { useContext } from 'react';
import { UserContext } from "./Components/Tabs";

export default function Userdata() {
    const user = useContext(UserContext);
    //const value = React.useContext(UserContext);  

    console.log("userekta", user);
    return (
        <div>
            <h1>User Data</h1>
            <h3>Name:{user.inputs.firstName} {user.inputs.lastName}</h3>
            <h4>Email: {user.inputs.email}</h4>
        </div>
    );
}  
