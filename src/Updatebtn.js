import React from  'react';
class Updatebtn extends React.Component{

 updateData = (data) => {
	console.log("newdat4444",data);
 }
	render(){
		//console.log("newdat",this.props.currentdata);
		return(
			<button onClick={()=>this.updateData(this.props.currentdata)}>Update</button>
		)
	}
}
export default Updatebtn