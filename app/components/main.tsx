"use client";

import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const MainContent: React.FC = () => {
  const [filenamelist, setFilenamelist] = React.useState<string[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch("/pics/images.json");
      const data = await res.json();
      setFilenamelist(data);
    };
    fetchFiles();
  }, []);

  console.log({ filenamelist });

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <p className="text-2xl text-pink-900 font-display font-bold mb-4">
        Cherished Moments Before the Aisle
      </p>
      <Carousel className="w-[90%]">
        <CarouselContent className="flex">
          {filenamelist.map((_, index) => (
            <CarouselItem key={_}>
              <div className="flex max-h-[600px] items-center justify-center relative min-h-[400px] overflow-hidden rounded-lg">
                <Image
                  src={`/pics/${_}`}
                  alt="profile"
                  key={_}
                  className=" object-contain "
                  fill
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MainContent;
