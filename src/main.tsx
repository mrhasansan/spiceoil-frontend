import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes/rootpage.tsx";
import { ErrorPage } from "./routes/error-page.tsx";
import { ProductsRoute, loader as productsLoader } from "./routes/products.tsx";
import { HomeRoute } from "./routes/home.tsx";
import { ProductSlugRoute, loader as productLoader } from "./routes/product-detail.tsx";
import { SignInRoute, action as signinAction } from "./routes/signin.tsx";
import { RegisterRoute, action as registerAction } from "./routes/register.tsx";
import { ProfileRoute, loader as myProfileLoader } from "./routes/profile.tsx";

import "./index.css";

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
      {
        path: "/register",
        element: <RegisterRoute />,
        action: registerAction,
      },
      {
        path: "/signin",
        element: <SignInRoute />,
        action: signinAction,
      },
      {
        path: "/myprofile",
        element: <ProfileRoute />,
        loader: myProfileLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
