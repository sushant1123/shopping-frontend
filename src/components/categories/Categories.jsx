import React from "react";
import { categories } from "../../data";
import CategoryItem from "../categoryItem/CategoryItem";

import { Container } from "./categories.styles";

const Categories = () => {
	return (
		<Container>
			{categories?.map((item) => (
				<CategoryItem item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Categories;
