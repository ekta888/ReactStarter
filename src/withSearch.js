import React, { Component } from 'react'
import { useState, useEffect } from 'react'

const withSearch = (Product) => {
	return ()=>{
	const [searchTerm, setsearchTerm ] = useState('');

	const	handleSearch = e => {
		setsearchTerm(e.target.value);
	  }

	return(
		<div>
			<div>
			<input onChange={handleSearch} value={searchTerm} type="text" placeholder="Search" />
			</div>
			<Product searchTerm={searchTerm} />
	  </div>
	);
	}
}
export default withSearch