import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../Layouts/PageTemplate";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Dashboard from "../Layouts/Dashboard";
import ProductDetailsTemplate from "../Layouts/ProductDetailsTemplate";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <PageTemplate />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        loader: () => fetch("https://dummyjson.com/products"),
      },
      {
        path: "/product/:id",
        element: <ProductDetailsTemplate />,
        loader: ({ params }) =>
          fetch(`https://dummyjson.com/products/${params.id}`),
      },
      {
        path: "/about",
        element: <h1 className="text-4xl font-bold text-center">About page</h1>,
      },
      {
        path: "/contact",
        element: (
          <h1 className="text-4xl font-bold text-center">Contact page</h1>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default routers;
