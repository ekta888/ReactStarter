import React from "react";
// import { Route, Navigate } from "react-router-dom";
import { BrowserRouter, Link, Route, Routes, NavLink, Navigate, Outlet } from "react-router-dom";

//  export default function ProtectedRoutes({
// 	auth
// }) {
// 	const auth = null; // determine if authorized, from context or however you're doing it
//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;

// }//import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ auth, children }) => {
	console.log('children', children)
	if (!auth) {
		return <Navigate to="/" replace />;
	}
	return children;
};
export default ProtectedRoutes;