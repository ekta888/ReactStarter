import React from 'react';
import ContactUsPageimage from "./assets/images/contact-us.jpg";
// class Contact extends React.Component {
// 	render() {
// 		return (
// 			<>
// 				<div className='contact-data'>
// 					<img src={ContactUsPageimage} alt="" className='image' />
// 					<div className='centered'>
// 						<h1>Address:</h1>
// 						<h2>Keas 69 Str.15234, ChalandriAthens,Greece</h2>
// 						<h6>+ 30 - 2106019311(landline)</h6>
// 						<h6>+ 30 - 6977664062(mobile phone)</h6>
// 						<h6>+ 30 - 2106398905(fax)</h6>
// 					</div>
// 				</div>
// 			</>
// 		);
// 	}
// }
// export default Contact;
export default function Contact() {
	return (
		<>
			<div className='contact-data'>
				<img src={ContactUsPageimage} alt="" className='image' />
				<div className='centered'>
					<h1>Address:</h1>
					<h2>Keas 69 Str.15234, ChalandriAthens,Greece</h2>
					<h6>+ 30 - 2106019311(landline)</h6>
					<h6>+ 30 - 6977664062(mobile phone)</h6>
					<h6>+ 30 - 2106398905(fax)</h6>
				</div>
			</div>
		</>
	);
}