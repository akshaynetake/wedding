"use client";

import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import UploadcareImage from "@uploadcare/nextjs-loader";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";

const MainContent: React.FC = () => {
  const [filenamelist, setFilenamelist] = React.useState<string[]>([]);

  useEffect(() => {
    const fetchFiles = async () => {
      const res = await fetch("/image_cdn.json");
      const data = await res.json();
      setFilenamelist(data.results);
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
          {filenamelist.map((_: any, index) => (
            <CarouselItem key={_.uuid}>
              <div className="flex max-h-[600px] items-center justify-center relative min-h-[400px] overflow-hidden rounded-lg">
                <UploadcareImage
                  src={`https://ucarecdn.com/${_.uuid}/`}
                  alt="profile"
                  key={_}
                  className="object-contain "
                  fill
                  loader={uploadcareLoader}
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
