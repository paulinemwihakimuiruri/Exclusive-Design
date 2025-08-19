import Categories from "./_components/Categories";
import Customer from "./_components/CustomerService";
import Explore from "./_components/Explore";
import Featured from "./_components/Featured";
import FlashSale from "./_components/FlashSale";
import Hero from "./_components/Hero";
import Experience from "./_components/MusicPic";
import Products from "./_components/Products";


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

