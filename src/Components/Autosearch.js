/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Form } from 'react-bootstrap';
import Autocomplete from './Autocomplete';
import useOutsideClick from '../Hooks/Outsideclick';
import Country from '../countries.json';
const Autosearch = ({ name, label, placeholder }) => {
	const [documentRef, isVisible, setIsVisible] = useOutsideClick();
	const [suggestions, setSuggestions] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState('');
	console.log("14");
	const [searchTerm, setSearchTerm] = useState('');
	console.log("15");
	const [errorMsg, setErrorMsg] = useState('');
	console.log("16");
	//const [country, setcountries] = useState('');
	const ref = useRef();
	console.log("17");


	useEffect(() => {
		console.log("useOutsideClick", documentRef);
		ref.current = _.debounce(processRequest, 300);
	}, []);

	function processRequest(searchValue) {
		console.log("19>>>>>>>>>>>>>>>>>>>>>>>>>", searchValue);
		axios
			.get('/countries.json')
			.then((response) => {
				const countries = response.data;
				const result = countries.filter((country) =>
					country.toLowerCase().includes(searchValue.toLowerCase())
				);
				setSuggestions(result);
				if (result.length > 0) {
					setIsVisible(true);
				} else {
					setIsVisible(false);
				}
				//	setcountries(countries);
				setErrorMsg('');
			})
			.catch(() => setErrorMsg('Something went wrong. Try again later'));
	}

	function handleSearch(event) {
		console.log("20");
		event.preventDefault();
		const { value } = event.target;
		setSearchTerm(value);

		ref.current(value);
	}

	function handleSuggestionClick(countryValue) {
		console.log("20433");
		setSelectedCountry(countryValue);
		setIsVisible(false);
	}
	return (
		<Form.Group controlId="searchTerm">
			<Form.Label>{label}</Form.Label>
			<Form.Control
				className="input-control"
				type="text"
				value={searchTerm}
				name={name}
				onChange={handleSearch}
				autoComplete="off"
				placeholder={placeholder}
			/>
			<div ref={documentRef}>
				{isVisible && (
					<Autocomplete
						isVisible={isVisible}
						suggestions={suggestions}
						handleSuggestionClick={handleSuggestionClick}
					/>
				)}
			</div>
			{selectedCountry && (
				<div className="selected-country">
					Your selected country: {selectedCountry}
				</div>
			)}
			{Country.filter(country => {
				if (selectedCountry === '') {
					return <div className="box" style={{ border: "1px solid green", overflowX: "auto" }}>
						<p>{country}</p>
					</div>
				} else if (country.toLowerCase().includes(selectedCountry.toLowerCase())) {
					return <div className="box" style={{ border: "1px solid green", overflowX: "auto" }}>
						<p>{country}</p>
					</div>
				}
			}).map((country, index) => (
				<div className="box" key={index} style={{ border: "1px solid green", overflowX: "auto" }}>
					<p>{country}</p>
				</div>
			))}
			{errorMsg && <p className="errorMsg">{errorMsg}</p>}
		</Form.Group>
	);
};
export default Autosearch;