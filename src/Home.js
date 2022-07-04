import React from 'react';
import { connect } from 'react-redux';
import HomePageimage from "./assets/images/home.jpg";

//import ReactDOM from "react-dom";
// class Home extends React.Component{
// 	render(){
// 		console.log("out");
// 		return (
// 			<div className='HomePage'>
// 				<h1>I am on Home Page </h1>
// 			</div>
// 		);
// 	}
// }
// export default Home

const Home = (props) => {
	console.log("propsekta", props)
	return (

		<>
			<div className="container">
				<img src={HomePageimage} alt="" className='image' />
				<div className='centered'>
					<h1>I am on Home Page </h1>
					<h1>Hello I am  {props.email}</h1>
				</div>
			</div>
		</>
	);
}
function mapStateToProps(state) {
	console.log("homepage", state)
	return {
		email: state.userdata[0],
		password: '*******'
	};
}
export default connect(mapStateToProps)(Home);