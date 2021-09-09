import React, { useState } from "react";
import { Fragment } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
	const [categories, setCategories] = useState(["One piece"]);

	return (
		<Fragment>
			<h2>Gif expert App</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category}></GifGrid>
				))}
			</ol>
		</Fragment>
	);
};

export default GifExpertApp;
