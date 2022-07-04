import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Autosearch from './Components/Autosearch';

export default function Country() {
	return (
		<div className="main">
			<h1>Country List</h1>
			<div className="search-form">
				<Form>
					<Autosearch
						name="country"
						label="Enter Country"
						placeholder="Type a country name"
					/>
				</Form>
			</div>
		</div>
	)
}