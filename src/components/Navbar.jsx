import React from "react";
import hamburger_active from "../assets/hamburger-active.svg"
import hamburger_non_active from "../assets/hamburger-non-active.svg"
import { useState } from "react"
const Navbar = () => {

  const [toogleNavbar, setToogleNavbar] = useState(false);

  return (
    <div>
      <nav className="flex justify-between px-8 py-4">
        <div>
          <h1 className="font-bold">Azhar<span className="text-red-600 font-bold">Hanif</span></h1>
        </div>
        <div 
          className="cursor-pointer"
          onClick={() => setToogleNavbar(!toogleNavbar)}>
          <img 
            src={toogleNavbar ? hamburger_non_active : hamburger_active} alt="" />
        </div>
      </nav>
      <div className={toogleNavbar ? "block" : "hidden" }>
        <ul className="px-8">
          <li className="py-2"><a href="#">Home</a></li>
          <li className="py-2"><a href="#">About</a></li>
          <li className="py-2"><a href="#">Portofolio</a></li>
          <li className="py-2"><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;
