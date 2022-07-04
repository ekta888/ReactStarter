import React from 'react';
import { BrowserRouter, Link, Route, Routes, NavLink } from "react-router-dom";
import About from './About'
import Contact from './Contact'

const Footer = () => {
	return (
		<footer className="footer">
			<>
				<div className='footer-text'>
					<BrowserRouter>
						<div className='footer-link'>
							<div>
								<NavLink to="/about" className="footer-in-text" exact activeStyle={
									{ color: 'green' }
								}>About</NavLink>
							</div>
							<div>
								<NavLink to="/contact" className="footer-in-text" exact activeStyle={
									{ color: 'magenta' }
								}>Contact</NavLink>
							</div>
						</div>
						<Routes>
							<Route path="/about" element={<About />}></Route>
							<Route path="/contact" element={<Contact />}></Route>
						</Routes>
					</BrowserRouter>
					<p>Company © Radixweb. All rights reserved.</p>
				</div>
			</>
		</footer>
	);
};
export default Footer;