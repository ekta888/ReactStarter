import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Verifyemail() {
	const history = useHistory();
	useEffect(() => {
		const searchParams = new URLSearchParams(window.location.search);
		const token = searchParams.get('token');
		axios.post('/verify-email', { token })
			.then(response => {
				if (response.data.status == 400) {
					// Display flash message here for error
					toast.error(response.data.message, {
						position: toast.POSITION.TOP_RIGHT
					});
				} else {
					toast.success(response.data.message, {
						position: toast.POSITION.TOP_RIGHT
					});

				}

			})
			.catch(error => {
				toast.error(error, {
					position: toast.POSITION.TOP_RIGHT
				});
			});
		history.push("/auth/login");
	}, []);
	return (
		<div>

		</div>
	);
}