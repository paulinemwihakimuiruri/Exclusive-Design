import Title from "@/shared-components/Title";
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Gamepad2,
  Headphones,
  Monitor,
  Smartphone,
  Watch,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const CATEGORIES = [
  {
    item: Smartphone,
    text: "Phone",
  },
  {
    item: Monitor,
    text: "Computers",
  },
  {
    item: Watch,
    text: "SmartWatch",
  },
  {
    item: Camera,
    text: "Camera",
  },
  {
    item: Headphones,
    text: "HeadPhones",
  },
  {
    item: Gamepad2,
    text: "Gaming",
  },
];

const Categories = () => {
  return (
    <section className="max-w-7xl  mx-auto w-full border-b border-gray-300 pt-10 pb-13">
      <div className="flex flex-col gap-4">
        <Title text="Categories" />

        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">
            <h1>Browse By Category</h1>
          </div>

          <div className="items-end flex gap-2">
            <ArrowLeft className="bg-gray-100 p-1 rounded-full size-8" />
            <ArrowRight className="bg-gray-100 p-1 rounded-full size-8" />
          </div>
        </div>

        <div className="flex gap-6 ">
          {CATEGORIES.map((category, index) => (
            <div
              key={index}
              className="flex flex-col gap-1 bg-white hover:bg-red-600 transition-colors duration-300 group border border-gray-400 rounded-sm w-fit py-5 px-8"
            >
              <div className="size-31 text-black group-hover:text-white items-center justify-center flex ">
                <category.item size={60} />
              </div>
              <div className="flex items-center justify-center text-black group-hover:text-white">
                <p>{category.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
