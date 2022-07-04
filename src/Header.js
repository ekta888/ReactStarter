import React from 'react';
//import ReactDOM from "react-dom";
import styled from 'styled-components';
import Home from './Home.js';
import Welcome from './Welcome.js'
import About from './About'
import Contact from './Contact'
import Gridlist from './Gridlist.js';
import ProductData from './ProductList'
import Products from './Product'
import Login from "./Container/Login";
import { getLogout } from "./Redux/Actions";
import { useSelector, useDispatch } from "react-redux";
//import Layout from './Layout.js';
import ProtectedRoutes from "./ProtectedRoutes";
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Mainform from "./Mainform";
import Logo from "./assets/images/logo.jpg";



const HeaderWrap = styled.div`
	overflow: hidden;
	background-color: cadetblue;
	// padding: 20px 10px;
`;
const HeaderNav = styled.div`
	float: right;
    font-size: 22px;
    margin-top: 32px;
`;
const LogoLink = styled.a`
	float: left;
	color: black;
	text-align: center;
	padding: 12px;
	text-decoration: none;
	font-size: 18px; 
	line-height: 25px;
	border-radius: 4px;
`;
// const HomeLink = styled.a`
// 	//background-color: dodgerblue;
// 	color: white;
// 	padding: 20px;
// 	content: Home
// `;

const Listing = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	display: flex;
`;
const UnderList = styled.li`
	padding-right: 30px;
`;


const Header = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.isAuthenticated);
	console.log("auth456", auth);
	//let navigate = useNavigate();
	const handleClick = () => {
		dispatch(getLogout());
	}
	let login = auth
	return (
		<>
			<BrowserRouter>
				<HeaderWrap>
					<div className='header-logo'><LogoLink href="https://radixweb.com/"><img src={Logo} className='logo-img' /></LogoLink></div>
					<HeaderNav>
						<Listing className="header-tabs">
							{!auth ?
								<UnderList>
									<NavLink to="/" exact activeStyle={
										{ color: 'red' }
									}>Login</NavLink>
								</UnderList>
								: ""
							}
							<UnderList>
								<NavLink to="/home" exact activeStyle={
									{ color: 'red' }
								}>Home</NavLink>
							</UnderList>
							<UnderList>
								<NavLink to="/about" exact activeStyle={
									{ color: 'green' }
								}>About</NavLink>
							</UnderList>
							<UnderList>
								<NavLink to="/contact" exact activeStyle={
									{ color: 'magenta' }
								}>Contact</NavLink>
							</UnderList>
							<UnderList>
								<NavLink to="/list" exact activeStyle={
									{ color: 'magenta' }
								}>List</NavLink>
							</UnderList>
							{/* <UnderList>
									<NavLink to="/productlist" exact activeStyle={
										{ color: 'magenta' }
									}>Product List</NavLink>
								</UnderList> */}
							<UnderList>
								<NavLink to="/product" exact activeStyle={
									{ color: 'magenta' }
								}>Product</NavLink>
							</UnderList>
							<UnderList>
								<NavLink to="/mainform" exact activeStyle={
									{ color: 'magenta' }
								}>Information</NavLink>
							</UnderList>
							<UnderList>
								<NavLink to="/" onClick={handleClick} exact className="btn btn-danger" activeStyle={
									{ color: 'magenta' }
								}>{auth ? 'Log Out' : 'Log In '} </NavLink>
							</UnderList>

							{/* <button   onClick={handleClick()}>Log out</button> */}
						</Listing>
					</HeaderNav>
				</HeaderWrap>
				<Routes>
					<Route path="/" element={<Login />}></Route>
					<Route path="/home" element={<ProtectedRoutes auth={auth}> <Home />  </ProtectedRoutes>}></Route>
					<Route path="/about" element={<ProtectedRoutes auth={auth}> <About />  </ProtectedRoutes>}></Route>
					<Route path="/contact" element={<ProtectedRoutes auth={auth}> <Contact />  </ProtectedRoutes>}></Route>
					<Route path="/list" element={<ProtectedRoutes auth={auth}> <Gridlist />  </ProtectedRoutes>}></Route>
					<Route path="/mainform" element={<ProtectedRoutes auth={auth}> <Mainform />  </ProtectedRoutes>}></Route>
					{/* <Route path="/productlist" element={<ProductData />}></Route> */}
					<Route path="/product" element={<ProtectedRoutes auth={auth}> <Products />  </ProtectedRoutes>}></Route>
				</Routes>

			</BrowserRouter>

		</>
	);
}
export default Header


