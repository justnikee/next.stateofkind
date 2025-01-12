import { getProducts } from "@/lib/getproducts";

type Product = {
  id: string;
  name: string;
};

const Products = async () => {
  try {
    const products = await getProducts();

    if (!products || products.length === 0) {
      return <div>No products available</div>;
    }

    return (
      <div>
        {products.map((product: Product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <div>Error loading products: {error.message}</div>;
  }
};

export default Products;
