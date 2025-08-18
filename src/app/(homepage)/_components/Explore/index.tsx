import Button from "@/shared-components/Button";
import Title from "@/shared-components/Title";
import { ArrowLeft, ArrowRight, Eye, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

const OURPRODUCTS = [
  {
    image: "/DogFood.png",
    text: "Breed Dry Dog Food",
    price: "$100",
    rating: "/Three Star.png",
    ratingNum: "(35)",
  },
  {
    image: "/CanonCam.png",
    text: "CANON EOS DSLR Camera ",
    price: "$360",
    rating: "/Four Star.png",
    ratingNum: "(95)",
  },
  {
    image: "/Laptop.png",
    text: "ASUS FHD Gaming Laptop",
    price: "$700",
    rating: "/Five Star.png",
    ratingNum: "(325)",
  },
  {
    image: "/Laptop.png",
    text: "Curology Product Set",
    price: "$500",
    rating: "/Four Star.png",
    ratingNum: "(145)",
  },
   {
    image: "/Car.png",
    text: "Kids Electric Car",
    price: "$960",
    rating: "/Five star.png",
    ratingNum: "(65)",
  },
   {
    image: "/Cleats.png",
    text: "Jr.Zoom Soccer Cleats",
    price: "$1160",
    rating: "/Five star.png",
    ratingNum: "(35)",
  },
   {
    image: "/GamePad.png",
    text: "GP11 Shooter USB Gamepad",
    price: "$660",
    rating: "/Four HalfStar.png",
    ratingNum: "(55)",
  },
   {
    image: "/Jacket.png",
    text: "Quilted Satin Jacket",
    price: "$660",
    rating: "/Four HalfStar.png",
    ratingNum: "(55)",
  },
  

];

const Explore = () => {
  return (
    <section className="max-w-7xl  mx-auto w-fullitems-center gap-6 pt-10">
      <div className="flex flex-col gap-4">
        <Title text="Our Products" />

        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Explore Our Products</h1>

          <div className="items-end flex gap-2">
            <ArrowLeft className="bg-gray-100 p-1 rounded-full size-8" />
            <ArrowRight className="bg-gray-100 p-1 rounded-full size-8" />
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-4 gap-6 py-10">
        {OURPRODUCTS.map((ourproduct, index) => (
          <div key={index} className="bg-white">
            <div className="w-75 h-60 items-center flex justify-center bg-gray-100 relative overflow-hidden group">
              <Image
                src={ourproduct.image}
                alt="Dog Food"
                width={190}
                height={180}
              />
              <button className="bg-black text-white py-4 w-full absolute bottom-0 translate-y-16 group-hover:translate-y-0 transition-transform duration-200">
                Add to Cart
              </button>
              <div className="absolute right-5 top-4 flex flex-col gap-3">
                <Heart className="bg-white rounded-full p-1 size-8" />
                <Eye className="bg-white rounded-full size-8 p-1" />
              </div>
            </div>
            
            <div>
              <p>{ourproduct.text}</p>
              <div className="flex items-center gap-2">
                <p>
                  <span className="text-red-600">{ourproduct.price}</span>
                </p>
                <div className="flex gap-2">
                  <Image
                    src={ourproduct.rating}
                    alt="Three stars"
                    width={100}
                    height={20}
                  />
                  <span>{ourproduct.ratingNum}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center"><Button text="View All Products" /></div>
    </section>
  );
};

export default Explore;
