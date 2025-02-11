import React from "react";
import Image from "next/image";

const SaveTheDates: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full justify-center items-center min-h-screen">
          <div className="text-[130px] font-display md:hidden bg-[#fbf9f6] pb-4">
            <Image src={"/g.png"} alt="" width={480} height={320} />
            <p className="text-2xl font-display p-8 text-pink-900 font-bold">
              With joyful hearts, we invite you to celebrate the union of
              [Bride's Name] and [Groom's Name] as they embark on their journey
              together.
            </p>
            <p className="text-lg font-bold">
              "A celebration of love and commitment"
            </p>
          </div>
          <div className="text-[130px] font-display hidden md:block">
            <p className="bg-gradient-to-r from-gray-800 to-gray-100 bg-clip-text text-transparent">
              SAVE <br />
              THE <br /> DATE
            </p>
          </div>
          <div className="h-full grid">
            <div className="rounded-t-full rounded-b-full bg-[url(/pics/IMG_9612.JPG)] bg-cover min-h-[500px] m-8 md:bg-[-100px]" />
            <div className="font-display mt-[36px]">
              <p className="text-lg font-main text-gray-400">15 FEB 2025 6PM</p>
              <p className="text-4xl">HALDI </p>
            </div>
          </div>
          <div className="h-full grid">
            <div className="rounded-t-full rounded-b-full bg-[url(/pics/IMG_9614.JPG)] bg-cover min-h-[500px] m-8 bg-[-190px] md:bg-[-270px]" />
            <div className="font-display mt-[36px]">
              <p className="text-lg font-main text-gray-400">15 FEB 2025 8PM</p>
              <p className="text-4xl">SANGEET </p>
            </div>
          </div>
          <div className="h-full grid">
            <div className="rounded-t-full rounded-b-full bg-[url(/pics/IMG_9602.JPG)] bg-cover min-h-[500px] m-8 md:bg-[-100px] bg-[-40px]" />
            <div className="font-display mt-[36px]">
              <p className="text-lg font-main text-gray-400">
                16 FEB 2025 5.30PM
              </p>
              <p className="text-4xl">WEDDING </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaveTheDates;
