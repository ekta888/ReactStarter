import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import Verifyemail from "views/auth/Verifyemail.js";
import Resendmail from "views/auth/Resendmail";
import Forgotpassword from "views/auth/Forgotpassword";
import Resetpassword from "views/auth/Resetpassword";

export default function Auth() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/masteradmin" exact component={Register} />
            <Route path="/verify-email/:token" exact component={Verifyemail} />
            <Route path="/auth/resendmail/:token" exact component={Resendmail} />
            <Route path="/auth/forgotpassword" exact component={Forgotpassword} />
            <Route path="/reset-password/:token" exact component={Resetpassword} />
            <Redirect from="/" to="/auth/login" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
