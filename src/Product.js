import React from 'react';
import products from './product.json';
import ProductCard from './ProductCard';
import withSearch from './withSearch';

console.log("product", products);

// export default function Product() {
// 	return (
// 		<div>
// 		  <div>
// 			<div>
// 			  <h2>Products</h2>
// 			</div>
// 		  </div>
// 		  <div>
// 		  <input
//             onChange={this.handleSearch}
//           //  value={searchTerm}
//             type="text"
//             placeholder="Search"
//           />
// 			{product.products.map((product) => 
// 				 <div className="product">
// 				 <p>
// 				   <b>Title:</b> {product.title}
// 				 </p>
// 				 <p>
// 				   <b>Style:</b> {product.style}
// 				 </p>
// 				 <p>
// 				   <b>Price:</b> {product.price}
// 				 </p>
// 				 <p>
// 				   <b>Description:</b> {product.description}
// 				 </p>
// 				 <p>
// 				   <b>Free shipping:</b> {product.isFreeShipping}
// 				 </p>
// 				 <hr />
// 			   </div>

// 			)}
// 		  </div>
// 		</div>
// 	  )
// }

const ProductsList = (props) => {
	const { searchTerm } = props
	return (
		<div>
			<div>
				<div>
					<h2>Products</h2>
				</div>
			</div>
			<div>
				{products.products.filter(products => `${products.style} ${products.title} ${products.description}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
					.map((product) => {
						return <ProductCard key={product.sku} {...product} />
					})}
			</div>
		</div>
	)
}
export default withSearch(ProductsList);


