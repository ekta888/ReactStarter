import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "views/auth/Register.js";


export default function Auth() {
    return (
        <>
        <main>
            <Switch>
                <Route path="/auth/register" exact component={Register} />
            </Switch>
        
            
        </main>
        </>
    );
}