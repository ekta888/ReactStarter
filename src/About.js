import React from "react";
import AboutPageimage from "./assets/images/write-about-us-page.png";

// class About extends React.Component {
// 	render() {
// 		return (
// 			<img src={AboutPageimage} alt="" className='image' />
// 			// <>
// 			// 	<div>
// 			// 		<img src={AboutPageimage} alt="" className='image' />
// 			// 		<div className='centered'>
// 			// 			<h3></h3>
// 			// 		</div>
// 			// 	</div>
// 			// </>
// 		);
// 	}
// }
// export default About;
export default function About() {
	return (
		<>
			<img src={AboutPageimage} alt="" className='image' />
		</>
		// <>
		// 	<div>
		// 		<img src={AboutPageimage} alt="" className='image' />
		// 		<div className='centered'>
		// 			<h3></h3>
		// 		</div>
		// 	</div>
		// </>
	);
}