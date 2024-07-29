import { type Product } from "@/types";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const backendURL = import.meta.env.VITE_BACKEND_API_URL;

  try {
    const response = await fetch(`${backendURL}/products/${slug}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Stays : ${response.status}`);
    }
    const responJSON = await response.json();
    const product: Product = responJSON.data;

    console.log(product);
    return { product };
  } catch (error) {
    return { product: null };
  }
}

export function ProductSlugRoute() {
  const { product } = useLoaderData() as Awaited<ReturnType<typeof loader>>;

  if (!product) {
    // Check if product is null
    return <div>Product not found</div>; // Display a message if the product is not found
  }

  return (
    <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
          <img src={`${product.imageURL}`} className="object-cover object-center" />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
          <section aria-labelledby="information-heading" className="mt-2">
            <p className="text-2xl text-gray-900">{product.price}</p>
            <h1>Stock : {product.quantity}</h1>
            <h1> {product.description}</h1>
          </section>
          <section aria-labelledby="options-heading" className="mt-10">
            <form>
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
