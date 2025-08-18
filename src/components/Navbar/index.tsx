import { ChevronDown, Heart, Search, ShoppingCart, } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col justify-center items-center w-full">
      <div className="bg-black py-4 mx-auto items-center justify-center flex w-full">
        <div className="text-center flex items-center text-white justify-end max-w-6xl w-full gap-56">
          <div className="flex gap-2 ">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>{" "}
            <Link href="#" className="font-bold underline">
              ShopNow
            </Link>
          </div>
          <div className="flex gap-1 items-center">
            <p>English</p>
            <ChevronDown />
          </div>
        </div>
      </div>

      <div className="border-b border-gray-300 w-full bg-white flex items-center justify-center">
        <div className="flex gap-44 w-full max-w-7xl pt-8 pb-4 items-center justify-between">
          <div className="font-bold text-3xl">
            <h1>Exclusive</h1>
          </div>
          <div className="flex items-center gap-12">
            <Link href="#">Home</Link>
            <Link href="#">Contact</Link>
            <Link href="#">About</Link>
            <Link href="/signUp">Sign Up</Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center bg-gray-200 gap-1 px-4 rounded-sm">
              <input
                placeholder="What are you looking for?"
                className=" px-4 py-3"
              />
              <Search />
            </div>
            <Heart />
            <ShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
