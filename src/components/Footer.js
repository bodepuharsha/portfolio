import React from "react";
import { BsGithub } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
      <p className="text-sm text-center m-2">
        Designed and Developed by Harsha
      </p>
      <p className="text-sm font-semibold text-center m-2">
        Copyright © 2025 Harsha.dev
      </p>
      <span className="flex items-center justify-center gap-7 m-2">
        <a
          href="https://github.com/bodepuharsha"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-purple-400 transition-colors duration-300"
        >
          <BsGithub size={22} />
        </a>
        <a
          href="https://x.com/bodepuharsha"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
        >
          <RiTwitterXFill size={22} />
        </a>
        <a
          href="www.linkedin.com/in/harsha-vardhan-bodepu-82b238258"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-600 transition-colors duration-300"
        >
          <FaLinkedinIn size={22} />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-pink-500 transition-colors duration-300"
        >
          <AiFillInstagram size={22} />
        </a>
      </span>
    </div>
  );
}

export default Footer;
