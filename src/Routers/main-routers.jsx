import { createBrowserRouter } from "react-router-dom";
import PageTemplate from "../Layouts/PageTemplate";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Dashboard from "../Pages/Dashboard";
import ProductDetailsTemplate from "../Layouts/ProductDetailsTemplate";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";

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
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routers;
