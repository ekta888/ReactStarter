import React from 'react';
import './Popup.css';
import Updatebtn from './Updatebtn';
//import axios from "axios";

// this.handleChange = this.handleChange.bind(this);

// function getPopup(props){
// 	console.log('props',props);
// 		return(
// 			<div className='popup'>
// 			<div className='popup_inner'>
				
// 				<input type = 'text' name = 'employee_name' value = {props.empdata.employee_name} onChange={this.handleChange} />
// 				<input type = 'text' name = 'employee_salary' value = {props.empdata.employee_salary} onChange={this.handleChange} />
// 				<input type = 'text' name = 'employee_age' value = {props.empdata.employee_age} onChange={this.handleChange} />
// 				<Updatebtn currentdata = {props.empdata}/>
// 			</div>
// 		  </div>
// 		  );
// }
class getPopup extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			updatedata: [],
			employee_name: this.props.empdata.employee_name,
			employee_salary: this.props.empdata.employee_salary,
			employee_age:this.props.empdata.employee_age

		  };
	}
	handleChange=(e)=>{
		this.setState ({ 
			[e.target.name]: e.target.value });
	}
	componentDidUpdate(prevProps,prevState) {
		console.log("dump",prevState); //will show the new state
		console.log("tamtam",this.state); //will show the previous state

       if(prevState !== this.state){
		console.log(8566);
		console.log("empdid",'http://dummy.restapiexample.com/api/v1/update/'+this.props.empdata.id);
		// fetch ('https://reqres.in/api/products/2')
		// .then((response) => response.json())
		// .catch((error) => console.error("Error: ", error))
		// .then((data) => {
		// 	email:''
		// });
			
			
	   }
    }

	UpdateEmployee = ()=>{
		console.log("hihihihi");
		fetch('https://reqres.in/api/products/2',{
				method:'PUT',
				headers: {
					'Content-Type': 'application/json',
					'accept':'application/json'
				  },
				  body: JSON.stringify({
					name: "foo",
					
				}),
			}).then((result)=>{
				console.log("sdsds",result);
			})

	}

	getData = ()=>{
		fetch(
			"https://reqres.in/api/products/2")
		.then((res) => res.json())
		.then((json) => {
			console.log("API data repeat",json);
		})
	}
	render(){
	
		return(
			
			<div className='popup'>
				<div className='popup_inner'>
					<input type = "text" name = "employee_name" value = {this.state.employee_name} onChange={this.handleChange} />
					<input type = "text" name = "employee_salary" value = {this.state.employee_salary} onChange={this.handleChange} />
					<input type = "text" name = "employee_age" value = {this.state.employee_age} onChange={this.handleChange} />
					<button currentdata = {this.state.updatedata} onClick={this.UpdateEmployee}>Update</button>
					<button onClick={this.getData}>GEt</button>
				</div>
		  </div>
		);
	}
} 
export default getPopup
