import React from "react";
import ProductList from "../Components/ProductList";
import { Link, useLoaderData } from "react-router-dom";

import PageTitle from "../Components/PageTitle";

const Products = () => {
  const { products } = useLoaderData();
  console.log(useLoaderData());

  return (
    <>
      <PageTitle title="Products - Router shop" />
      <section className="shop">
        <nav className="flex pb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3 mr-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                  Products
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <section>
          <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
            <h1 className="mb-5 text-2xl font-bold text-black dark:text-white sm:text-3xl">
              Product gallery
            </h1>
            <p className="text-base font-medium leading-relaxed text-body-color">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius
              eros eget sapien consectetur ultrices. Ut quis dapibus libero.
            </p>
          </div>
        </section>
        <ProductList productsList={products} limit={12} />
      </section>
    </>
  );
};

export default Products;
