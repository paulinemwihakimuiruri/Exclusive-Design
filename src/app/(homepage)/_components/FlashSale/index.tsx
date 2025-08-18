import Button from "@/shared-components/Button";
import Title from "@/shared-components/Title";
import { ArrowLeft, ArrowRight, Eye, Heart } from "lucide-react";
import Image from "next/image";
import React from "react"


const SALES = [
  {
    image: "/PS.png",
    percent: "-40%",
    name: "HAVIT HV-G92 Gamepad",
    price: "$120",
    discount: "$160",
    rating: "/PSstar.png",
    ratingNum: "(88)",
  },
  {
    image: "/Keyboard.png",
    percent: "-35%",
    name: "AK-900 Wired Keyboard",
    price: "$960",
    discount: "$1160",
    rating: "/Keyboard-star.png",
    ratingNum: "(75)",
  },
  {
    image: "/TV.png",
    percent: "-30%",
    name: "IPS LCD Gaming Monitor",
    price: "$370",
    discount: "$400",
    rating: "/Tv-star.png",
    ratingNum: "(99)",
  },
  {
    image: "/Chair.png",
    percent: "-25%",
    name: "S-Series Comfort Chair",
    price: "$375",
    discount: "$400",
    rating: "/chair-star.png",
    ratingNum: "(99)",
  },
  {
    image: "/Chair.png",
    percent: "-25%",
    name: "S-Series Comfort Chair",
    price: "$375",
    discount: "$400",
    rating: "/chair-star.png",
    ratingNum: "(99)",
  },
];

const FlashSale = () => {
  return (
    <section className="max-w-7xl  mx-auto w-full flex flex-col items-center gap-6 py-28 border-b border-gray-300">
      <div className="flex flex-col gap-4">
        <Title text="Today's" />
        <div className="flex justify-between w-full">
          <div className="flex items-end gap-24">
            <h1 className="text-4xl font-bold">Flash Sales</h1>
            <div className="flex gap-2 items-end">
              <p className="flex flex-col gap-1">
                <span>Days</span>
                <span className="text-4xl font-bold">03</span>
              </p>
              <span className="text-red-600 text-4xl">:</span>
              <p className="flex flex-col gap-1">
                <span>Hours</span>
                <span className="text-4xl font-bold">23</span>
              </p>
              <span className="text-red-600 text-4xl">:</span>
              <p className="flex flex-col gap-1">
                <span>Minutes</span>
                <span className="text-4xl font-bold">19</span>
              </p>
              <span className="text-red-600 text-4xl">:</span>
              <p className="flex flex-col gap-1">
                <span>Seconds</span>
                <span className="text-4xl font-bold">56</span>
              </p>
            </div>
          </div>
          <div className="items-end flex gap-2">
            <ArrowLeft className="bg-gray-100 p-1 rounded-full size-8" />
            <ArrowRight className="bg-gray-100 p-1 rounded-full size-8" />
          </div>
        </div>

        <div className="flex gap-4 py-10">
          {SALES.map((sale, index) => (
            <div key={index} className="bg-white">
              <div className="w-60 h-60 items-center flex justify-center bg-gray-100 relative overflow-hidden group">
                <Image
                  src={sale.image}
                  alt="Play station"
                  width={120}
                  height={120}
                />
                <button className="bg-black text-white py-4 w-full absolute bottom-0 translate-y-16 group-hover:translate-y-0 transition-transform duration-200">
                  Add to Cart
                </button>
                <div className="absolute top-4 left-4 bg-red-600 text-white px-2 rounded-sm">
                  {sale.percent}
                </div>
                <div className="absolute right-5 flex flex-col gap-3 top-4 ">
                  <Heart className="bg-white p-1 rounded-full size-8" />
                  <Eye className="bg-white p-1 rounded-full size-8" />
                </div>
              </div>
              <div className="pt-4">
                <p className="font-bold text-xl">{sale.name}</p>

                <p className="flex gap-4">
                  <span className="text-red-600 font-bold">{sale.price}</span>
                  <span className="line-through text-gray-400">
                    {sale.discount}
                  </span>
                </p>
                <div className="flex gap-2">
                  <Image
                    src={sale.rating}
                    alt="PS rating"
                    width={100}
                    height={20}
                  />
                  <span className="text-gray-400">{sale.ratingNum}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button text="View All Products"/>
    </section>
  );
};

export default FlashSale;
