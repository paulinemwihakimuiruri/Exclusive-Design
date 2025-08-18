import Image from "next/image";
import Hero from "./_components/Hero";
import FlashSale from "./_components/FlashSale";
import Categories from "./_components/Categories";
import Products from "./_components/Products";
import Experience from "./_components/MusicPic";
import Explore from "./_components/Explore";
import Featured from "./_components/Featured";
import Customer from "./_components/CustomerService";


export default function Home() {
  return (
 <div>
  <Hero/>
  <FlashSale/>
  <Categories/>
  <Products/>
  <Experience/>
  <Explore/>
  <Featured/>
  <Customer/>
 </div>
  );
}

