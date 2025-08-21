import React from "react";
import { FaHandPointRight } from "react-icons/fa";

function WhoIM() {
  return (
    <div className="flex flex-wrap items-center justify-center flex-col lg:flex-row relative">
      <img
        src="./star.jpg"
        alt="background"
        className="h-full w-full object-cover opacity-30 absolute bottom-0 z-0"
      />
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col my-10 lg:gap-10 z-20">
        <h1 className="flex text-white text-2xl lg:text-4xl gap-2 font-bold">
          Know Who <p className="text-[#ad50eb]">I'M</p>
        </h1>
        <div className="flex items-center m-auto justify-center w-11/12 lg:w-4/5">
          <span className="flex flex-col gap-3 text-white items-start text-base justify-center font-thin lg:text-lg">
            <p className="text-start mt-3 mx-auto md:mx-0">
              I'm{" "}
              <span className="font-semibold text-[#ad50eb]">
                Bodepu Harsha Vardhan
              </span>
              , a{" "}
              <span className="text-[#ad50eb] font-medium">
                CSE student at NIT Jamshedpur
              </span>{" "}
              and a passionate{" "}
              <span className="text-[#ad50eb] font-medium">
                Full-Stack Web Developer
              </span>
              . I specialize in the MERN stack (MongoDB, Express, React, Node.js){" "}
              and love building high-performing applications.
            </p>
            <p className="flex text-gray-200 text-base lg:text-lg gap-2 font-semibold">
              Some of my achievements include:
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm lg:text-base space-y-1">
              <li>Completed DSA (C++) with 200+ problems solved</li>
              <li>4★ on HackerRank</li>
              <li>Built and deployed 3+ full-stack web apps</li>
              <li>SIH participant & Miracle Hackathon participant</li>
            </ul>
            <div className="flex flex-wrap items-center justify-start gap-4 font-sans text-gray-200 mt-4">
              <div className="flex items-center gap-2">
                <FaHandPointRight /> Web Development
              </div>
              <div className="flex items-center gap-2">
                <FaHandPointRight /> Competitive Programming
              </div>
              <div className="flex items-center gap-2">
                <FaHandPointRight /> Problem Solving
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center z-20">
        <img
          src="about.png"
          alt="Harsha Vardhan"
          className="lg:p-10 object-cover lg:w-3/4 w-full"
        />
      </div>
    </div>
  );
}

export default WhoIM;
