import { type Product } from "@/types/product";
import { Link, useLoaderData } from "react-router-dom";

export async function loader() {
  const backendURL = import.meta.env.VITE_BACKEND_API_URL;

  console.log({ backendURL });

  const response = await fetch(`${backendURL}/products`);

  const products: Product[] = await response.json();

  return { products };
}

export function ProductsRoute() {
  const { products } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  return (
    <div>
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
      <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => {
          return (
            <li key={product.id} className="group relative">
              <Link to={`${product.slug}`}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img src={"https://i0.wp.com/www.perhutani.co.id/wp-content/uploads/2023/05/kayu-putih-640x330-1.jpg?fit=640%2C330&ssl=1"} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {" "}
                      <span> Stock </span>
                      {product.quantity}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price} <span> / kg</span>
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
