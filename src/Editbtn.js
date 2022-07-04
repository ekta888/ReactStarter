import React from 'react';
import Popup from './Popup.js'
class Editbtn extends React.Component{
	constructor(){
		super();
		this.state = {
			showpopup : false
		}
	}
	editdata = (data) => {
		this.setState({showpopup:!this.state.showpopup})
	}
	render(){
		return(
			<>
			<button onClick= {()=>this.editdata(this.props.empdata)}>Edit</button>
				{this.state.showpopup ? 
				<Popup empdata = {this.props.empdata} />
				:null}
			</>
		);
	}
} 
export default Editbtn
