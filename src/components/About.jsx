import React from "react";
import Profile from "../assets/profile.jpg"
import { BiChevronDown } from "react-icons/bi";
import CV from "../assets/AzharIlyasHanifa-CV.pdf"


const About = () => {
  return (
    <div className="bg-sideColor min-h-screen flex flex-col py-16 items-center">
        <div className="w-[250px] h-[250px] md:w-[275px] md:h-[275px] lg:w-[300px] lg:h-[300px] overflow-hidden rounded-full border-2 border-mainColor">
            <img className="w-full h-full object-cover" src={Profile} alt="" />
        </div>
        <h1 className="pt-10 font-bold text-mainColor text-2xl md:text-3xl lg:text-4xl">Hello, I'm Azhar Ilyas Hanifa</h1>
        <p className="pt-3 text-fontColor text-md md:text-lg lg:text-xl font-normal text-justify px-16">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, quam voluptatibus. Sequi aperiam fugiat aliquam facere in quidem corrupti doloribus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem magnam, facere debitis rerum libero sint similique mollitia obcaecati ad deleniti.</p>
        <div className="flex flex-row gap-7 text-fontColor font-medium py-4">
            <button className="rounded-lg py-3 px-6 bg-mainColor hover:text-mainColor hover:bg-fontColor transition-all">
                <a href={CV} download>
                Download CV
                </a>
            </button>
            <button className="flex flex-row items-center bg-mainColor py-3 pl-4 pr-2 rounded-lg hover:text-mainColor hover:bg-fontColor transition-all">
                <p className="pr-2">Show Me More</p>
                <BiChevronDown size={24} />
            </button>
        </div>
    </div>
  )
};

export default About;
