import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type Product } from "@/types/product";
import { useLoaderData } from "react-router-dom";

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
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Card className="w-[350px]">
                <CardHeader>
                  <CardTitle>{product.name}</CardTitle>
                  <CardDescription> Description Product</CardDescription>
                </CardHeader>
                <CardContent>
                  <img
                    src="https://m.media-amazon.com/images/I/81DHmsc+f5L.jpg"
                    alt=""
                  />
                  <p>Price</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Add To Chart</Button>
                  <Button variant="outline">Buy</Button>
                </CardFooter>
              </Card>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
