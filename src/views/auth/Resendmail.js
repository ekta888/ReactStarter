import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Resendmail() {
	const history = useHistory();
	useEffect(() => {
	}, []);

	const handleButtonClick = () => {
		const searchParams = new URLSearchParams(window.location.search);
		const token = searchParams.get('token');
		console.log(searchParams.get('token'));
		console.log(token);
		axios.post('/resend-email', { token })
			.then(response => {
				console.log(response);
				if (response.data.status === 400) {
					toast.error(response.data.error, {
						position: toast.POSITION.TOP_RIGHT
					});
				} else {
					//history.push("/auth/login");
					// Display flash message here for error
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
	}
	return (
		<>
			<div className="container mx-auto px-4 w-full xl:w-6/12 px-4">
				<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
					<div className="rounded-t bg-white mb-0 px-6 py-6">
						<div className="text-center flex justify-between">
							<span className="max-w-100-px h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"><img alt="..." className="w-full h-full rounded-full align-middle border-none shadow-lg" src={require("assets/img/github.svg").default} /></span>
							<h1 className="text-blueGray-700 text-sm text-2xl font-bold mt-2">
								Resend Email
							</h1>
						</div>
					</div>
					<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
						<h1 className="text-sm text-2xl font-bold">Hi there 👋</h1>
						<h2>Welcome to Our Website!</h2>
						<p>Thank you for registering. To complete your registration, please click the link you recevied in mail.</p>
						<br />
						<p>If you not recevie any mail than please check your spam folder.</p>
						<br />
						<p>You can also contact to our support team by <a href="" className="text-lightBlue-500">Clicking here</a></p>
						<br />
						<button className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" type="button" onClick={handleButtonClick}>Resend Email</button>
						<br /><br />

						<p>Thank you,</p>
						<p>Happy To Help</p>
					</div>
				</div>
				<div className="flex flex-wrap mt-6 relative">
					<div className="w-1/2">
						<Link to="/auth/login" className="text-blueGray-200">
							<small>Back to login</small>
						</Link>
					</div>
				</div>
			</div >

		</>
	);
}