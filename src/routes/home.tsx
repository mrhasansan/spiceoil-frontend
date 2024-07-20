import { CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function HomeRoute() {
  return (
    <div className="container  ">
      <Carousel className="w-full ">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <CardContent className=" items-center justify-center p-6">
                  <img src="https://via.placeholder.com/1500x800" alt="" />
                  <span className="text-4xl font-semibold"> Carousel index{index + 1}</span>
                </CardContent>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
