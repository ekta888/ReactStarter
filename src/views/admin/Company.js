import React from "react";

// components

import ListCompany from "components/Company/ListCompany";
console.log(45666);
export default function Company() {
	return (
		<>
			<div className="flex flex-wrap">
				<div className="w-full px-4">
					<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
						<ListCompany />
					</div>
				</div>
			</div>
		</>
	);
}