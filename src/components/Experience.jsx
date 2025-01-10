import React from "react";
import { GiRobotHelmet } from "react-icons/gi";

const Experience = () => {
  return(
    <div className="min-h-[400px] bg-sideColor">
        <div className="flex flex-col rounded-xl py-4 px-4 bg-backgroundColor w-[80%] mx-auto">
            <h1 className="tracking-wide text-center pb-4 text-fontColor font-bold text-[28px]">EXPERIENCE</h1>
            {/* Mulai Dari Sini */}
            <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor ">
                        <h3 className="font-bold">Bangkit Academy</h3>
                        <div className="pt-2">
                            <p>Cloud Computing</p>
                            <p>Aug 2024 - Jan 2025</p>
                        </div>
                    </div>
                    <GiRobotHelmet className="text-fontColor " size={40} />
                </div>
                <div className="flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor ">
                        <h3 className="font-bold">Analog Electronics</h3>
                        <div className="pt-2">
                            <p>Lab Assistant</p>
                            <p>Aug 2024 - Dec 2024</p>
                        </div>
                    </div>
                    <GiRobotHelmet className="text-fontColor " size={40} />
                </div>
                <div className="flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor ">
                        <h3 className="font-bold">H8</h3>
                        <div className="pt-2">
                            <p>Head of Programmer</p>
                            <p>Aug 2023 - Sep 2024</p>
                        </div>
                    </div>
                    <GiRobotHelmet className="text-fontColor " size={40} />
                </div>
                <div className="flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor ">
                        <h3 className="font-bold">Robotics Competition</h3>
                        <div className="pt-2">
                            <p>Volunteer</p>
                            <p>Dec 2023 - Jan 2024</p>
                        </div>
                    </div>
                    <GiRobotHelmet className="text-fontColor " size={40} />
                </div>
                <div className="flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor ">
                        <h3 className="font-bold">H8</h3>
                        <div className="pt-2">
                            <p>Programmer - H8</p>
                            <p>Sep 2022 - Aug 2023</p>
                        </div>
                    </div>
                    <GiRobotHelmet className="text-fontColor " size={40} />
                </div>
                <div className="flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor ">
                        <h3 className="font-bold">Elins Research Club</h3>
                        <div className="pt-2">
                            <p>Linux and Networking</p>
                            <p>Apr 2023 - Mar 2024</p>
                        </div>
                    </div>
                    <GiRobotHelmet className="text-fontColor " size={40} />
                </div>
                <div className="flex flex-row items-center w-96 h-32 justify-between px-12 md:px-16 bg-sideColor rounded-xl">
                    <div className="flex flex-col text-center text-fontColor ">
                        <h3 className="font-bold">Elins Research Club</h3>
                        <div className="pt-2">
                            <p>Website Development</p>
                            <p>Apr 2024 - Present</p>
                        </div>
                    </div>
                    <GiRobotHelmet className="text-fontColor " size={40} />
                </div>
            </div>
            {/* Sampai Sini */}
        </div>
    </div>
  )
};

export default Experience;
