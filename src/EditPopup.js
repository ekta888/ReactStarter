import React, { Component, useRef } from 'react'

export default function EditPopup(targetid) {
	
//	const [set]
	const nameForm = useRef(null)
	const Updatelist = (targetid) =>{
	//	console.log('targetid33',targetid);
		//e.preventDefault();
		const form = nameForm.current;
		let email = form['email'].value;
		let lastName = form['last_name'].value;
	//	console.log('targetvalue',id) 
	fetch('http://192.168.102.92:3003/admin/users/update/625fdd889e93dd4cfe092c9b',{
		method:'POST',
		headers: {
			'Content-Type': 'application/json',
			'accept':'application/json'
		  },
		  body: JSON.stringify({
			"firstName": "Sanu",
			"lastName":lastName,
			"email":email,
			"password":"heena123",
			"dob":"1998-04-15",
			"gender":"F",
			"status":"active",
			"mobile":"9033232340"
			
		}),
	}).then((result)=>{
		console.log("sdsds",result);
	})
		
		
	}
	return (
		<>
			<div className='edit-popup'>
				<div className='edit_popup_inner'>
					<h1>Edit Data Here</h1>
					<form ref={nameForm}>
						<div className='main-middle-div'>
							<div className='email'>
								<label>Email</label>
								<input type="text" name="email"></input>
							</div>
							<div className='last-name'>
								<label>Last Name</label>
								<input type="text" name="last_name"></input>
							</div>
							</div>
					</form>
					<button onClick = {() => Updatelist(targetid)}>Update</button>
			</div>
		</div>
		</>
	);
}

