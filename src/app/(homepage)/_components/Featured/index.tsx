import Title from "@/shared-components/Title";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <section className="max-w-7xl  mx-auto w-full items-center gap-6 pt-15">
      <div className="flex flex-col gap-4">
        <Title text="Featured" />
        <h1 className="text-4xl font-bold">New Arrival</h1>
      </div>

      <div className="grid grid-cols-2 gap-6 py-10">
        <div className="bg-black rounded-sm">
          <Image
            src="/Playstation.png"
            alt="Playstation"
            width={511}
            height={511}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex bg-[#0D0D0D] rounded-sm relative">
            <div className="text-white absolute bottom-4 left-4">
              <h1>Women's Collections</h1>
              <p>Featured woman collection that</p>
              <p>give you another vibe.</p>
              <Link href="#">Shop Now</Link>
            </div>
            <Image src="/Woman.png" alt="Woman" height={286} width={432} className="ml-auto"/>
          </div>

          <div className="flex gap-6 pt-6 w-full">
            <div
              className="bg-black rounded-sm w-80 items-center justify-center
                "
            >
              <Image
                src="/Speakers.png"
                alt="Speakers"
                width={210}
                height={222}
              />
            </div>
            <div className="bg-black rounded-sm w-80 items-center">
              <Image
                src="/Perfume.png"
                alt="Perfume"
                width={210}
                height={222}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
