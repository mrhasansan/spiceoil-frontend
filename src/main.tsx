import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes/rootpage.tsx";
import { ErrorPage } from "./routes/error-page.tsx";
import { ProductsRoute, loader as productsLoader } from "./routes/products.tsx";
import { HomeRoute } from "./routes/home.tsx";
import { ProductSlugRoute, loader as productLoader } from "./routes/product-detail.tsx";

import "./index.css";
import { SignInRoute } from "./routes/signin.tsx";
import { RegisterRoute } from "./routes/register.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
      },
      {
        path: "/products",
        element: <ProductsRoute />,
        loader: productsLoader,
      },
      {
        path: "/products/:slug",
        element: <ProductSlugRoute />,
        loader: productLoader,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignInRoute />,
  },
  {
    path: "/register",
    element: <RegisterRoute />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
