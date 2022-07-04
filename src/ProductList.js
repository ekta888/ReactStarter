import React, { useState, useEffect } from 'react'
import { FaUserEdit } from "react-icons/fa";
import EditPopup from './EditPopup';

export default function ProductList() {
	const [Currentdata, setNewdata] = useState([]);
	const [ShowPopup,setPopup] = useState(false);
	const [activeIndex, setActiveIndex ] =useState(0);
	const [searchTerm, setsearchTerm ] =useState('');
	const ProductList = () => {
		fetch(
			"https://reqres.in/api/users")
			.then((res) => res.json())
			.then((res) => {
				console.log(res.data);
				setNewdata(res.data);
			})
	}
	useEffect(() => {
		ProductList()
	}, [])

	const UpdateUser = (index) =>{
		console.log("id",index);
		if(ShowPopup){
			setPopup(false);
			setActiveIndex(0);
		}else{
			setPopup(true);
			setActiveIndex(index);
		}
		
	}
	 const handleSearch = e => {
   		 setsearchTerm(e.target.value);

	  }
	   //let filteredProducts = filterProducts(searchTerm);
	//console.log('searchTerm',searchTerm);
	
	return (
		<>
			<h2>React Fetch API Example</h2>
			{/* {Currentdata.map((item,i) => {
				<div class="gallery">
					<a target="_blank" href="img_5terre.jpg">
						<img src="img_5terre.jpg" alt="Cinque Terre" width="600" height="400">
					</a>
					<div class="desc">Add a description of the image here</div>
				</div>
			})} */}
			 <input onChange={handleSearch} value={searchTerm} type="text" placeholder="Search" />
			 
			{Currentdata.map((item, i) => {
				return <div class="gallery">
					<h3>{item.first_name} {item.last_name}</h3>
					<a target="_blank" href="img_5terre.jpg">
						<img src={item.avatar} alt="Cinque Terre" width="600" height="400" />
					</a>
					<div class="desc">{item.email} <FaUserEdit onClick={() => UpdateUser(item.id)}/></div>
				</div>
			})}
			{ShowPopup?<EditPopup  targetid={activeIndex}/>:null}
		</>
	);
}



