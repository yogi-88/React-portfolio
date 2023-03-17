import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-500 relative w-full flex justify-center items-center flex-col">
      <div className="relative w-full">
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div
            className="absolute bottom-0 left-0 right-0 h-10 bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('https://i.ibb.co/wQZVxxk/wave.png')`,
            }}
          />
        </div>
        <div className="relative z-20">
          <ul className="flex justify-center items-center flex-wrap my-5">
            <li className="mr-4">
              <a href="https://github.com/yogi-88">
                <FaGithub />
              </a>
            </li>
            <li className="mr-4">
              <a href="https://www.linkedin.com/in/yogita-negi-0aa79121/">
                <FaLinkedin />
              </a>
            </li>
            <li className="mr-4">
              <a href="https://twitter.com/home">
                <FaTwitter />
              </a>
            </li>
          </ul>
          <ul className="flex justify-center items-center flex-wrap my-5">
            <li className="mx-2">
              <a
                href="#"
                className="text-white text-lg opacity-75 hover:opacity-100 transition-all"
              >
                Home
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#"
                className="text-white text-lg opacity-75 hover:opacity-100 transition-all"
              >
                About
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#"
                className="text-white text-lg opacity-75 hover:opacity-100 transition-all"
              >
                Services
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#"
                className="text-white text-lg opacity-75 hover:opacity-100 transition-all"
              >
                Team
              </a>
            </li>
            <li className="mx-2">
              <a
                href="#"
                className="text-white text-lg opacity-75 hover:opacity-100 transition-all"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white text-sm my-3">
        &copy;2023 Yogita Negi | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
