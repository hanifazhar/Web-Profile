import React from "react";
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import { useState } from "react"
const Navbar = () => {

  const [toogleNavbar, setToogleNavbar] = useState(false);

  return (
    <div className="bg-backgroundColor">
      <nav className="flex items-center justify-between px-8 py-4 bg-backgroundColor md:bg-backgroundColor md:px-12 md:py-6 lg:bg-backgroundColor lg:w-[80%] mx-auto lg:px-0">
        <div>
          <h1 className="font-bold text-xl text-fontColor">Azhar<span className="font-bold text-mainColor">Hanif</span></h1>
        </div>
        <div 
          className="cursor-pointer md:hidden lg:hidden"
          onClick={() => setToogleNavbar(!toogleNavbar)}>
          {toogleNavbar ? <FiX size={29} className="text-fontColor" /> : <FiMenu size={29} className="text-fontColor" />}
        </div>
        <div className="hidden md:block text-fontColor text-sm">
          <ul className="flex flex-row gap-4">
            <li><a className="hover:text-mainColor hover:border-b-2 border-mainColor" href="#">Home</a></li>
            <li><a className="hover:text-mainColor hover:border-b-2 border-mainColor" href="#">About</a></li>
            <li><a className="hover:text-mainColor hover:border-b-2 border-mainColor" href="#">Portofolio</a></li>
            <li><a className="hover:text-mainColor hover:border-b-2 border-mainColor" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className={toogleNavbar ? "block" : "hidden" }>
        <ul className="px-8 bg-backgroundColor text-fontColor py-2 border-t-2 border-b-2 border-mainColor">
          <li className="py-2"><a className="hover:text-mainColor hover:border-b-2 border-mainColor" href="#">Home</a></li>
          <li className="py-2"><a className="hover:text-mainColor hover:border-b-2 border-mainColor" href="#">About</a></li>
          <li className="py-2"><a className="hover:text-mainColor hover:border-b-2 border-mainColor" href="#">Portofolio</a></li>
          <li className="py-2"><a className="hover:text-mainColor hover:border-b-2 border-mainColor" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;
