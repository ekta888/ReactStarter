import { useState, useEffect } from 'react';
import axios from 'axios';
function timeZoneDrp(settimezonelist) {
	axios.get('/gettimezonelist')
		.then(function (response) {
			if (response.data) {
				return settimezonelist(response.data);
			}
		});
}
function countryDrp(setcountrylist) {
	//const [countrylist, setCountryList] = useState();
	axios.get('/getcountrylist')
		.then(function (response) {
			if (response.data) {
				return setcountrylist(response.data);
			}
		});
}
export { timeZoneDrp, countryDrp };