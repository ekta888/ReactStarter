import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function Resetpassword() {
	const { register, handleSubmit, formState: { errors }, watch } = useForm();
	const history = useHistory();
	const [password, setPassword] = useState();
	const [responseError, setResponseError] = useState();
	const [confirmpassword, setConfirmpassword] = useState();
	const searchParams = new URLSearchParams(window.location.search);
	const token = searchParams.get('token');
	console.log(token);
	const onSubmit = async (data) => {
		axios.post('/reset-password', {
			password: (data.password) ? data.password : password,
			confirmpassword: (data.confirmpassword) ? data.confirmpassword : confirmpassword,
			token: token
		}).then((response) => {
			if (response.data.errors) {
				setResponseError(response.data.errors);
			} else if (response.data.status == 400) {
				// set flash message for error
			} else if (response.data.status == 200) {
				// set flash message for success
				window.setTimeout(function () {
					history.push('/login');
				}, 3000);
			}
			console.log("response", response);
		});
	}
	return (
		<>
			<div className="container mx-auto px-4 h-full">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-4/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
							<div className="rounded-t  mb-0 px-6 py-6">
								<div className="text-center flex justify-between">
									<span className="max-w-100-px h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
										<img alt="..." className="w-full h-full rounded-full align-middle border-none shadow-lg" src="/static/media/github.6c955556.svg" />
									</span>
									<h1 className="text-blueGray-700 text-sm text-2xl font-bold mt-2">Reset Password</h1>
								</div>
								<hr className="mt-6 border-b-1 border-blueGray-300" />
							</div>
							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								<form onSubmit={handleSubmit(onSubmit)}>

									<div className="relative max-w-580-px mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Password
										</label>
										<input
											type="password"
											name="password"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="New Password"
											onChange={(e) => setPassword(e.target.value)}
											//{...register("password", { required: true, minLength: 8 })}
											{...register("password", {
												required: "Password is required",
												minLength: {
													value: 8,
													message: "Password must be 8 character long",
												},
												validate: (value) => {
													return (
														[/[a-z]/, /[A-Z]/, /[0-9]/, /[^a-zA-Z0-9]/].every((pattern) =>
															pattern.test(value)
														) || "Password must include lower, upper, number, and special chars"
													);
												},
											})}
										/>
										{errors.password ? <p className="error-p  mt-2">{errors.password.message}</p> : null}
										{responseError && responseError.map((respErr, index) => {
											if (respErr.param == 'password') {
												return (
													<p className="error-p  mt-2">{respErr.msg}</p>
												);
											}
										})}
									</div>
									<div className="relative max-w-580-px mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Confirm Password
										</label>
										<input
											type="password"
											name="confirm-password"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Confirm Password"
											onChange={(e) => setConfirmpassword(e.target.value)}
											{...register("confirmpassword", {
												required: true,
												validate: (val) => {
													if (watch('password') != val) {
														return "Your passwords do no match";
													}
												},
											})}
										/>
										{errors.confirmpassword && errors.confirmpassword.type == 'required' && (
											<p className="error-p  mt-2">Confirm password is required</p>
										)}
										{errors.confirmpassword && errors.confirmpassword.type == 'validate' && (
											<p className="error-p mt-2">{errors.confirmpassword?.message}</p>
										)}
										{responseError && responseError.map((respErr, index) => {
											if (respErr.param == 'confirmpassword') {
												return (
													<p className="error-p  mt-2">{respErr.msg}</p>
												);
											}
										})}
									</div>
									<input type="Submit" className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 mt-6" value="Reset Password" />
								</form>
							</div>
						</div>
						<div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2">
								<Link to="/auth/login" className="text-blueGray-200">
									<small>Back to login</small>
								</Link>
							</div>

						</div>
					</div>
				</div>
			</div>
		</>
	);

}