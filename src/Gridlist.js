import React from "react";
import Dynamictable from "./Dynamictable";

class Gridlist extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			rowitems : []
		}
	}
	  // execute the code 
	  //https://reqres.in/api/products/
	  componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
            .then((res) => res.json())
            .then((json) => {
				//console.log("API data",json);
                this.setState({
                    rowitems: json.data,
                    DataisLoaded: true
                });
            })
    }

	
	// componentDidUpdate(prevProps) {
	// 	console.log(6666);
	// }
	render(){
		return(
			<Dynamictable dynamicdata={this.state.rowitems}/>
		)
	}
}
 
export default Gridlist