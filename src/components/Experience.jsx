import React from "react";
import { GiRobotHelmet } from "react-icons/gi";
import { GiElectric } from "react-icons/gi";
import { BiLogoGoogleCloud } from "react-icons/bi";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";

const Experience = () => {
  return(
    <div className="min-h-[400px] bg-sideColor">
        <div className="flex flex-col py-12 px-4 bg-backgroundColor w-[80%] lg:w-[62%] mx-auto">
            <h1 className="tracking-wide text-center pb-12 text-fontColor font-bold text-[28px]">EXPERIENCE</h1>
            {/* Mulai Dari Sini */}
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="cursor-pointer group hover:border-2 hover:border-mainColor hover:text-mainColor transition-all duration-500 border-2 border-sideColor flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor group-hover:text-mainColor transition-all duration-500">
                        <h3 className="font-bold">Bangkit Academy</h3>
                        <div className="pt-2">
                            <p>Cloud Computing</p>
                            <p>Aug 2024 - Jan 2025</p>
                        </div>
                    </div>
                    <BiLogoGoogleCloud className="text-fontColor group-hover:text-mainColor transition-all duration-500" size={40} />
                </div>
                <div className="cursor-pointer group hover:border-2 hover:border-mainColor hover:text-mainColor transition-all duration-500 border-2 border-sideColor flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor group-hover:text-mainColor transition-all duration-500">
                        <h3 className="font-bold">Analog Electronics</h3>
                        <div className="pt-2">
                            <p>Lab Assistant</p>
                            <p>Aug 2024 - Dec 2024</p>
                        </div>
                    </div>
                    <GiElectric className="text-fontColor group-hover:text-mainColor transition-all duration-500" size={40} />
                </div>
                <div className="cursor-pointer group hover:border-2 hover:border-mainColor hover:text-mainColor transition-all duration-500 border-2 border-sideColor flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor group-hover:text-mainColor transition-all duration-500">
                        <h3 className="font-bold">H8</h3>
                        <div className="pt-2">
                            <p>Head of Programmer</p>
                            <p>Aug 2023 - Sep 2024</p>
                        </div>
                    </div>
                    <BsPcDisplayHorizontal className="text-fontColor group-hover:text-mainColor transition-all duration-500" size={40} />
                </div>
                <div className="cursor-pointer group hover:border-2 hover:border-mainColor hover:text-mainColor transition-all duration-500 border-2 border-sideColor flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor group-hover:text-mainColor transition-all duration-500">
                        <h3 className="font-bold">Robotics Competition</h3>
                        <div className="pt-2">
                            <p>Volunteer</p>
                            <p>Dec 2023 - Jan 2024</p>
                        </div>
                    </div>
                    <GiRobotHelmet className="text-fontColor group-hover:text-mainColor transition-all duration-500" size={40} />
                </div>
                <div className="cursor-pointer group hover:border-2 hover:border-mainColor hover:text-mainColor transition-all duration-500 border-2 border-sideColor flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor group-hover:text-mainColor transition-all duration-500">
                        <h3 className="font-bold">H8</h3>
                        <div className="pt-2">
                            <p>Programmer - H8</p>
                            <p>Sep 2022 - Aug 2023</p>
                        </div>
                    </div>
                    <BsPcDisplayHorizontal className="text-fontColor group-hover:text-mainColor transition-all duration-500" size={40} />
                </div>
                <div className="cursor-pointer group hover:border-2 hover:border-mainColor hover:text-mainColor transition-all duration-500 border-2 border-sideColor flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor group-hover:text-mainColor transition-all duration-500">
                        <h3 className="font-bold">Elins Research Club</h3>
                        <div className="pt-2">
                            <p>Linux and Networking</p>
                            <p>Apr 2023 - Mar 2024</p>
                        </div>
                    </div>
                    <BiNetworkChart className="text-fontColor group-hover:text-mainColor transition-all duration-500" size={40} />
                </div>
                <div className="cursor-pointer group hover:border-2 hover:border-mainColor hover:text-mainColor transition-all duration-500 border-2 border-sideColor flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor group-hover:text-mainColor transition-all duration-500">
                        <h3 className="font-bold">Elins Research Club</h3>
                        <div className="pt-2">
                            <p>Website Development</p>
                            <p>Apr 2024 - Present</p>
                        </div>
                    </div>
                    <BsCodeSlash className="text-fontColor group-hover:text-mainColor transition-all duration-500" size={40} />
                </div>
            </div>
            {/* Sampai Sini */}
        </div>
    </div>
  )
};

export default Experience;
