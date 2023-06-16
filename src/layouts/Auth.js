import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Register from "views/auth/Register.js";
import EmailVerification from "views/auth/EmailVerification";
import Verifyemail from "views/auth/Verifyemail";
import Login from "views/auth/Login";
import Forgotpassword from "views/auth/Forgotpassword";
import Resetpassword from "views/auth/Resetpassword";
import Companyadd from "views/company/Companyadd";

export default function Auth() {
    return (
        <>
        <main>
            <Switch>
                <Route path="/auth/register" exact component={Register} />
                <Route path="/auth/resendmail/:token" exact component={EmailVerification} />
                <Route path="/verify-email/:token" exact component={Verifyemail} />
                <Route path="/auth/login" exact component={Login} />
                <Route path="/auth/forgotpassword" exact component={Forgotpassword} />
                <Route path="/reset-password/:token" exact component={Resetpassword} />
                <Route from="/" to="/auth/login" />
            </Switch>
        </main>
        </>
    );
}