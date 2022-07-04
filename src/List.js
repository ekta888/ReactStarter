import React from 'react';
import Deletebtn from './Deletebtn.js';
import EditButton from	'./Editbtn.js';
//import ReactTable from "react-table";  
//import "react-table/react-table.css";  

class List extends React.Component{
	constructor()
	{
		super();
		this.state = {
			 cars : [
				{
				  "color": "purple",
				  "type": "minivan",
				  "registration": new Date('2017-01-03'),
				  "capacity": 7
				},
				{
				  "color": "red",
				  "type": "station wagon",
				  "registration": new Date('2018-03-03'),
				  "capacity": 5
				},
				{
					"color": "blue",
					"type": "i10",
					"registration": new Date('2019-01-03'),
					"capacity": 5
				  },
				  {
					"color": "black",
					"type": "i20",
					"registration": new Date('2020-03-03'),
					"capacity": 5
				  },
				  {
					"color": "silver",
					"type": "ferrari",
					"registration": new Date('2021-03-03'),
					"capacity": 4
				  },
			]
		}
	}
	// componentDidMount(){
	// 	const listdata = this.state;
	// 	console.log(listdata);
	// 	this.setState({ listdata });  
	// }

	render() {
		return(
			<>
        		<h1>List of cars</h1>
				<table>
						<tr>
							<th>Color</th>
							<th>Type</th>
							<th>Registration</th>
							<th>Capacity</th>
							<th>Action</th>
						</tr>
						{this.state.cars?this.state.cars.map((listdata,index)=>(
							
							 <tr data-index={index}>
								 
							 <td>{listdata.color}</td>
							 <td>{listdata.type}</td>
							 <td>{listdata.registration.toLocaleDateString()}</td>
							 <td>{listdata.capacity}</td>
							 <td><EditButton/><Deletebtn/></td>
						   </tr>  
						)): <p>Users is empty</p>}
						{/* {this.state.cars.map(listdata => (
        					 <tr>
								<td>{listdata.color}</td>
								<td>{listdata.type}</td>
								<td>{listdata.registration}</td>
								<td>{listdata.capacity}</td>
							</tr>
      					))} */}
				</table>
				   {/* <ReactTable  
					 data={listdata}

					/> */}
      		</>
		);
	}
}
export default List