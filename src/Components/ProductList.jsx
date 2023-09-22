import PropType from "prop-types";
import Product from "./Product";

const ProductList = ({ productsList, limit = 12 }) => {
  const cliptProducts = productsList.slice(0, limit);
  return (
    <div className={`products grid gap-8 md:grid-cols-3 justify-center`}>
      {cliptProducts.map((product) => (
        <Product key={product.id} data={product} />
      ))}
    </div>
  );
};

ProductList.prototype = {
  productsList: PropType.array.isRequired,
};

export default ProductList;
