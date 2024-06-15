import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { SiDevexpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { Flip, Zoom } from "react-reveal";
import image from "../src/image/ppp.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-full bg-cyan-950 tablet:w-screen tablet:fixed">
      <header className="bg-cyan-900 h-12 w-full items-center z-1 fixed">
        <nav className=" hidden tablet:flex flex-row items-center p-4 justify-between font-bold text-slate-100 text-[20px] underline">
        <NavLink to="/" activeClassName="active">
            <button>Home</button>
          </NavLink> 
          <NavLink to="/project" activeClassName="active">
            <button>Project</button>
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            <button>About</button>
          </NavLink>
          <NavLink to="/contact" activeClassName="active">
            <button>Contact</button>
          </NavLink>
        </nav>

        <Flip bottom>
          <nav className="flex flex-row justify-between items-center p-2 tablet:hidden">
            <h1 className="font-bold text-slate-100 text-[20px]">
              Oyedokun V.
            </h1>
            <button onClick={toggleMenu}>
              <RxHamburgerMenu className="h-6 w-6 text-slate-100" />
            </button>
            {isOpen && (
              <div className="flex flex-col w-32 h-36 bg-cyan-900 mt-6 font-bold text-[18px] text-white gap-2 items-center absolute right-0 top-6">
                <NavLink to="/" activeClassName="active">
                  <button className="hover:text-green-500">Home</button>
                </NavLink>
                <NavLink to="/project" activeClassName="active">
                  <button className="hover:text-green-500">Projects</button>
                </NavLink>
                <NavLink to="/contact" activeClassName="active">
                  <button className="hover:text-green-500">Contact</button>
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                  <button className="hover:text-green-500">About</button>
                </NavLink>
              </div>
            )}
          </nav>
        </Flip>
      </header>

      <div className="m-auto items-center w-44 h-44 pt-16 tablet:hidden">
        <img src={image} alt="" className="w-44 h-44 rounded-full" />
      </div>

      <p className="text-[18px] text-center text-slate-300 font-bold pt-20 tablet:hidden">
        Hello, I am Oyedokun Victor Ayobami. I'm a passionate full-stack
        developer with a knack for crafting robust and scalable web application.
      </p>

      <div className="rounded-2xl h-56 w-96 m-auto mt-4 tablet:hidden">
        <p className="text-center text-[20px] text-slate-300 font-bold underline decoration-2">
          SKILLS
        </p>

        <div className="grid grid-cols-2 gap-4 p-5">
          <h4 className="flex items-center text-2xl text-slate-200 gap-4">
            JavaScript
            <TbBrandJavascript className="h-8 w-8 text-green-400" />
          </h4>

          <h4 className="flex items-center text-2xl text-slate-200 gap-4">
            React
            <FaReact className="h-8 w-8 text-green-400" />
          </h4>

          <h4 className="flex items-center text-2xl text-slate-200 gap-4">
            Tailwind
            <SiTailwindcss className="h-10 w-10 text-green-400" />
          </h4>

          <h4 className="flex items-center text-2xl text-slate-200 gap-4">
            Node.js
            <FaNodeJs className="h-8 w-8 text-green-400" />
          </h4>

          <h4 className="flex items-center text-2xl text-slate-200 gap-4">
            Express
            <SiDevexpress className="h-8 w-8 text-green-400" />
          </h4>

          <h4 className="flex items-center text-2xl text-slate-200 gap-4">
            MongoDB
            <SiMongodb className="h-8 w-8 text-green-400" />
          </h4>
        </div>
      </div>

      <footer className="bg-cyan-900 h-16 w-full items-center mt-4 tablet:hidden">
        <marquee behavior="" direction="left">
          <p className="text-center text-white text-[18px] p-4 font-bold">
            &copy; 2024 Oyedokun V. All rights reserved.
          </p>
        </marquee>
      </footer>

      <div className="hidden tablet:flex flex-row justify-between items-center">
        <aside className="m-auto w-40 mt-14">
          <p className="text-center text-[20px] text-slate-100 font-bold underline">
            <li>My Tech Stack</li>
          </p>

          <Flip right>
            <div className="flex flex-col gap-3 items-center pt-2 rounded-md mt-6">
              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                JavaScript
                <TbBrandJavascript className="h-8 w-8 text-cyan-400" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                React
                <FaReact className="h-8 w-8 text-cyan-400" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                Tailwind
                <SiTailwindcss className="h-10 w-10 text-cyan-400" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                Node.js
                <FaNodeJs className="h-8 w-8 text-cyan-400" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                Express
                <SiDevexpress className="h-8 w-8 text-cyan-400" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                MongoDB
                <SiMongodb className="h-8 w-8 text-cyan-400" />
              </h4>
            </div>
          </Flip>
        </aside>

        <main className="h-screen w-[550px] border-2 border-green-300 mt-14 border-y-0">
          <div className="m-auto items-center">
            <img src={image} alt="" className="w-44 h-44 m-auto rounded-full" />
            <Zoom>
              <p className="text-[20px] text-center text-slate-100 w-84 p-4 font-bold">
                Hello, I am Oyedokun Victor Ayobami. I'm a passionate full-stack
                developer with a knack for crafting robust and scalable web
                application.
              </p>
            </Zoom>
           
          </div>
        </main>

        <aside className="w-[550px]">
          <p className="text-center text-[20px] text-slate-300 font-bold underline">
            PROJECTS
          </p>
        </aside>
      </div>

      <footer className="hidden tablet:flex justify-center bg-cyan-900 h-16 w-full items-center fixed bottom-0">
        <p className="text-center text-slate-300 text-[18px] p-4 font-bold">
          &copy; 2024 Oyedokun V. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
