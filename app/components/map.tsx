"use client";

import { Button } from "@/components/ui/button";
import UploadcareImage from "@uploadcare/nextjs-loader";
import { uploadcareLoader } from "@uploadcare/nextjs-loader";

export const Map = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 relative">
      <p className="text-2xl text-pink-900 font-display font-bold mb-4">
        Ceremony & Reception Venue
      </p>
      <div className="relative min-h-[300px] overflow-hidden rounded-lg w-full">
        <UploadcareImage
          src={`https://ucarecdn.com/90858563-8e3d-491c-8191-8e7432e152b5/-/preview/1000x625/`}
          alt="profile"
          key="map_link"
          className="object-contain "
          fill
          loader={uploadcareLoader}
        />
      </div>
      <Button className="mt-4 bg-pink-900 text-white font-display hover:bg-pink-200 hover:text-gray-800">
        <a href="https://maps.app.goo.gl/zbDMaUExvxkdPk4n9" target="_blank">
          Start Navigation
        </a>
      </Button>
    </div>
  );
};
