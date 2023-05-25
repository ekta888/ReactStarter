import { React, useState } from 'react';
import axios from 'axios';

// const timeZoneDrp = function timeZoneDrp() {
// 	axios.get('/gettimezonelist')
// 		.then(function (response) {
// 			console.log(response);
// 			console.log(response.data);
// 			if (response.data) {
// 				return response.data;
// 			}
// 		});

// }
// export default timeZoneDrp;


export default function timeZoneDrp() {
	const [] =
		axios.get('/gettimezonelist')
			.then(function (response) {
				console.log(response);
				console.log(response.data);
				if (response.data) {
					return response.data;
				}
			});

}

