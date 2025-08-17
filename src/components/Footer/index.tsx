import {SendHorizontal } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white ">
      <div className="mx-auto w-full max-w-7xl flex justify-between py-8">
        <div className="py-4 flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Exclusive</h1>
          <p className="text-xl flex flex-col gap-2">Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="border border-white flex items-centre w-fit rounded-sm py-4 px-4">
            <input placeholder="Enter your email" className="text-gray-400" />
            <SendHorizontal />
          </div>
        </div>

        <div className="py-4 flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Support</h1>
          <div className="text-xl flex flex-col gap-2">
            <p>111 Bijoy sarani, Dhaka,<br/>
            DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>

        <div className="py-4 flex flex-col gap-4">
          <h1 className="font-bold text-2xl">Account</h1>
          <div className="text-xl flex flex-col gap-2">
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
        </div>

        <div className="py-4 flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Quick Link</h1>
          <div className="text-xl flex flex-col gap-2">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
        </div>

        <div className="py-4 flex flex-col gap-3">
          <h1 className="font-bold text-2xl">Download App</h1>
        <p className="text-gray-400">Save $3 with App New User Only</p>
        <Image src="/QRcode.png" alt='QR code' width={198} height={84} />
       <Image src="/icons.png" alt="Icons" width={168} height={24}/>
        </div>
      </div>

      <div className="border-t border-gray-800 text-gray-600 py-4 text-center texl-xl">&copy; Copyright Rimel 2022. All rights reserved</div>
    </footer>
  );
};

export default Footer;
