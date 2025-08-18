import Button from "@/shared-components/Button";
import Title from "@/shared-components/Title";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const PRODUCTS = [
  {
    image: "/Coat.png",
    text: "The north coat",
    price: "$260",
    discount: "$360",
    rating: "/Five star.png",
    ratingNum: "(65)",
  },
  {
    image: "/Bag.png",
    text: "Gucci duffle bag",
    price: "$960",
    discount: "$1160",
    rating: "/Four HalfStar.png",
    ratingNum: "(65)",
  },
  {
    image: "/Cooler.png",
    text: "RGB liquid CPU Cooler",
    price: "$160",
    discount: "$170",
    rating: "/Four HalfStar.png",
    ratingNum: "(65)",
  },
  {
    image: "/Shelf.png",
    text: "Small BookSelf",
    price: "$360",
    discount: "",
    rating: "/Five star.png",
    ratingNum: "(65)",
  },
];

const Products = () => {
  return (
    <section className="max-w-7xl  mx-auto w-full pt-10 pb-13">
      <div className="flex flex-col gap-4">
        <Title text="This Month" />
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Best Selling Products</h1>
          <Button text="View All" />
        </div>
      </div>

      <div className="flex gap-6 py-10 ">
        {PRODUCTS.map((product, index) => (
          <div key={index} className="bg-white">
            <div className="w-75 h-60 items-center flex justify-center bg-gray-100 relative">
              <Image
                src={product.image}
                alt="Duffle Bag"
                width={190}
                height={180}
              />
              <div className="absolute right-5 flex flex-col gap-3 top-4">
                <Heart className="bg-white rounded-full p-1 size-8" />
                <Eye className="bg-white rounded-full size-8 p-1" />
              </div>
            </div>

            <div className="pt-4">
              <p className="font-bold text-xl">{product.text}</p>
              <p className="flex gap-4">
                <span className="text-red-600 font-bold">{product.price}</span>
                <span className="line-through text-gray-400">
                  {product.discount}
                </span>
              </p>

              <div className="flex gap-2">
                <Image
                  src={product.rating}
                  alt="Five stars"
                  width={100}
                  height={20}
                />
                <span>{product.ratingNum}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
