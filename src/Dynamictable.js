import React from 'react';
import Deletebtn from './Deletebtn.js';
import EditButton from	'./Editbtn.js';

class Dynamictable extends React.Component{

	render(){
		return (
			<table>
				<tr>
					<th>Id</th>
					<th>Name</th>
					<th>Age</th>
					<th>Salary</th>
					<th>Image</th>
				</tr>
				{this.props.dynamicdata.slice(0, 5).map((data,index) =>(
					<tr>
						<td>{data.id}</td>
						<td>{data.employee_age}</td>
						<td>{data.employee_name}</td>
						<td>{data.employee_salary}</td>
						<td>{data.profile_image}</td>
						<td><EditButton empdata = {data} empid = {data.id}/><Deletebtn/></td>
					</tr>
				))}
			</table>
		);
	}
}
 
export default Dynamictable