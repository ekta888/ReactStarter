import React from 'react';
import ReactDOM from "react-dom";
import { Outlet, Link } from "react-router-dom";
import styled from 'styled-components';

const ListNav = styled.li`
//	background-color: dodgerblue;
	color: white;
	display: inline-block;

`;
const Linkdiv = styled.div`
//	background-color: dodgerblue;
	color: white;
	padding: 20px;
`;
 
class Layout extends React.Component{
	render(){
		return(
			<>
			<nav>
			  <ul>
			  <ListNav>
					<Linkdiv><Link to="/" exact>Home</Link></Linkdiv>
				</ListNav>
				<ListNav>
					<Linkdiv><Link to="/about">About </Link></Linkdiv>
				</ListNav>
				<ListNav>
					<Linkdiv><Link to="/contact">Contact Us</Link></Linkdiv>
				</ListNav>
				<ListNav>
					<Linkdiv><Link to="/list">List</Link></Linkdiv>
				</ListNav>
			  </ul>
			</nav>
	  
			<Outlet />
		  </>
		);
	}
}
export default Layout;