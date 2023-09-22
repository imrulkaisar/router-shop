import React from "react";
import ProductList from "../Components/ProductList";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const { products } = useLoaderData();

  return (
    <section className="shop">
      <ProductList productsList={products} limit={12} />
    </section>
  );
};

export default Products;
