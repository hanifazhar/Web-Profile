import React from "react";
import Lottie from "lottie-react";
import Animation from "../assets/animation.json"

const Home = () => {
  return (
      <div className="bg-backgroundColor min-h-screen flex flex-col items-center justify-center">
        <div className="w-[275px] h-[275px] md:w-[300px] md:h-[300px] lg:w-[325px] lg:h-[325px]">
            <Lottie loop={true} animationData={Animation} />
        </div>
        <h1 className="w-full flex justify-center font-bold text-mainColor text-2xl md:text-3xl lg:text-4xl">Welcome to My Portfolio</h1>
        <p className="text-fontColor text-md md:text-lg lg:text-xl font-medium py-2">Tech Enthusiast | Web Developer | IoT Innovator</p>
      </div>
  )
};

export default Home;