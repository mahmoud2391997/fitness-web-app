import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Margarine } from 'next/font/google';

const Navbar = () => {
    return (
      <nav className="flex items-center justify-between px-6 py-4 bg-transparent">
  <div className="flex items-center w-1/6">
    <img src="/logo copy.png" alt="Achilles Fitness Logo" className="w-full" />
  </div>
  <ul className="flex w-3/6 justify-between text-white">
    <li className="hover:text-red-500 border-b-2 border-red-500"><a href="/">HOME</a></li>
    <li className="hover:text-red-500"><a href="/aboutus">ABOUT US</a></li>
    <li className="hover:text-red-500"><a href="#">WHAT ARE THE BENEFITS</a></li>
    <li className="hover:text-red-500"><a href="#">OUR PRODUCTS</a></li>
    <li className="hover:text-red-500"><a href="/contactus">CONTACT US</a></li>
  </ul>
  <div className="text-white flex items-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10a9 9 0 013-6.7V4a3 3 0 013 3v2a3 3 0 006 0V7a3 3 0 013-3v-.7A9 9 0 1121 17v2a3 3 0 01-3 3H6a3 3 0 01-3-3v-2a9 9 0 010-7z" />
    </svg>
    <span>281 249 5156</span>
  </div>
</nav>

    );
};


export default Navbar;