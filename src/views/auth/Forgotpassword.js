import React, { useState } from "react"
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

export default function Forgotpassword() {
	const [email, setEmail] = useState();
	const [responseErrors, setResponseErrors] = useState();
	const [validationError, setValidationError] = useState();
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = async (data) => {
		axios.post('/forgot-password', {
			email: (data.email) ? data.email : email
		}).then((response) => {
			console.log(response);
			if (response.data.error && response.data.status === 400) {
				setValidationError(response.data.error);
			} else if (response.data.message && response.data.status === 400) {
				setResponseErrors(response.data.message);
			} else if (response.data.status === 200) {
				//set flash message here
				toast.success(response.data.message, {
					position: toast.POSITION.TOP_RIGHT
				});
			}
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
								Forgot Password
							</h1>
						</div>
					</div>
					<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
						<h3 className="text-center text-sm text-lg mt-6 font-bold">Enter your registered email to reset your password.</h3>
						<h1 className="text-sm text-lg font-bold">Hello,</h1><br />
						{/* <p>We have sent you this email in response to your request to reset your password on company name.</p><br /> */}
						<p>We cannot simply send you your old password. A unique link to reset your password has been generated for you.</p><br />
						<p>Please enter your email address below, click the following button, and then follow the instructions you received in the mail to reset your password.</p><br />
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="relative max-w-580-px mb-3">
								<label
									className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
									htmlFor="grid-password"
								>
									Email
								</label>
								<input
									type="text"
									name="email"
									className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
									placeholder="Email"
									onChange={(e) => setEmail(e.target.value)}
									{...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
								/>
								{errors.email && errors.email.type === "required" && (
									<p className="error-p  mt-2">Email is required.</p>
								)}
								{errors.email && errors.email.type === "pattern" && (
									<p className="error-p  mt-2">Email is not valid.</p>
								)}
								{validationError && (<p className="error-p  mt-2">{validationError[0].msg}.</p>)}
								{responseErrors && (<p className="error-p  mt-2">{responseErrors}</p>)}
							</div>
							<input type="submit" className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150" value="Reset Password" />
						</form>
						<br /><br />
						<p>Please contact our <a href="" className="text-lightBlue-500">support team</a> by if you haven't received any correspondence.</p>
						<a href="login" className="text-lightBlue-500">Back to login</a>
					</div>
				</div>
			</div >
		</>
	);
}