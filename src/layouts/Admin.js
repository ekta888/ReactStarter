import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import ProtectedRoute from "utils/ProtectedRoute";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";
export default function Admin() {
  const isAuthenticated = localStorage.getItem("authToken");
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <ProtectedRoute exact path="/admin/dashboard" component={Dashboard} isAuthenticated={isAuthenticated} />
            <ProtectedRoute exact path="/admin/maps" component={Maps} isAuthenticated={isAuthenticated} />
            <ProtectedRoute exact path="/admin/settings" component={Settings} isAuthenticated={isAuthenticated} />
            <ProtectedRoute exact path="/admin/tables" component={Tables} isAuthenticated={isAuthenticated} />
            <Redirect from="/admin" to="/admin/dashboard" />
            {/* <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" /> */}
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
