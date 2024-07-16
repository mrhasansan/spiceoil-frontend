import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export async function loader() {
  const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/products`);

  const products = await response.json();

  return { products };
}

export function ProductCard() {
  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Name Product</CardTitle>
          <CardDescription> Description Product</CardDescription>
        </CardHeader>
        <CardContent>
          <img src="https://m.media-amazon.com/images/I/81DHmsc+f5L.jpg" alt="" />
          <p>Price</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Add To Chart</Button>
          <Button variant="outline">Buy</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
