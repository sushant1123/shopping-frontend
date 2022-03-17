import Product from "../product/Product";
import { popularProducts } from "../../data";
import { Container } from "./products.styles";

const Products = () => {
	return (
		<Container>
			{popularProducts?.map((item) => (
				<Product item={item} key={item.id} />
			))}
		</Container>
	);
};

export default Products;
