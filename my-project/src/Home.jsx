import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi"
import { GiDevilMask } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
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
    <div className="w-screen h-full bg-gray-900 tablet:w-screen tablet:fixed">
      <header className="bg-cyan-900 h-12 w-full items-center z-1 fixed">
        <Flip bottom>
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
        </Flip>

        <Flip bottom>
          <nav className="flex flex-row justify-between items-center p-2 tablet:hidden">
            <div className="rounded-full text-yellow-300 bg-black w-10 h-10 flex items-center justify-center -mt-1"><GiDevilMask className="w-8 h-8"/></div>

            <button onClick={toggleMenu}>
              <GiHamburgerMenu className="h-8 w-8 text-yellow-300 font-extrabold" />
            </button>
            {isOpen && (
              <div className="flex flex-col w-32 h-36 bg-cyan-900 mt-6 font-bold text-[18px] text-white gap-2 items-center absolute right-0 top-6 rounded-bl-2xl rounded-br-2xl">
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

      <div className="rounded-2xl bg-gray-950 h-48 mx-4 m-auto mt-4 tablet:hidden">
        <div className="flex justify-center m-auto">
          
            <li className="underline decoration-2 text-yellow-300 text-[18px] font-semibold">My Tech Skills</li>
          
        </div>
        <div className="grid grid-cols-2 gap-4 p-3 justify-items-center">
          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>JavaScript</li>
            <TbBrandJavascript className="h-8 w-8 text-blue-500" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>React</li>
            <FaReact className="h-8 w-8 text-green-400" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>Tailwind</li>
            <SiTailwindcss className="h-10 w-10 text-green-400" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>Node.js</li>
            <FaNodeJs className="h-8 w-8 text-purple-500" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>Express</li>
            <SiDevexpress className="h-7 w-8 text-cyan-600" />
          </h4>

          <h4 className="flex items-center text-xl text-slate-200 gap-4">
            <li>MongoDB</li>
            <SiMongodb className="h-8 w-8 text-yellow-500" />
          </h4>
        </div>
      </div>

      <div className="flex justify-center m-auto mt-4">
        <Link to="project">
          <button className="bg-green-900 w-44 h-8 text-slate-100 text-[18px] font-semibold rounded-xl hover:bg-black hover:text-yellow-300">
            View my projects
          </button>
        </Link>
      </div>

      <footer className="bg-cyan-900 h-16 w-full items-center mt-4 flex flex-row justify-between tablet:hidden">
          <p className="text-center text-yellow-300 text-[16px] font-bold">
            Oyedokun V.&copy;
          </p>

          <button className="flex flex-row items-center gap-2 bg-yellow-300 rounded-md text-black w-32 h-6 p-3 font-semibold hover:bg-black hover:text-yellow-300">
          <FaWhatsapp />
          <a href="https://wa.me/2349055706732">WhatsApp</a>
        </button>

        <li className="text-yellow-300 font-semibold text-[16px]">Available for Job</li>
       
      </footer>

      <div className="hidden tablet:flex flex-row justify-between items-center">
        <Flip right>
          <aside className="m-auto mt-4">
            <li className="text-center text-[20px] text-yellow-300 font-bold underline">
              My Tech Skill
            </li>

            <div className="flex flex-col gap-3 items-center pt-2 rounded-md mt-6">
              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                <li>JavaScript</li>
                <TbBrandJavascript className="h-8 w-8 text-blue-500" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                <li>React</li>
                <FaReact className="h-8 w-8 text-green-400" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                <li>Tailwind</li>
                <SiTailwindcss className="h-10 w-10 text-cyan-400" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                <li>Node.js</li>
                <FaNodeJs className="h-8 w-8 text-purple-500" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                <li>Express</li>
                <SiDevexpress className="h-7 w-8 text-cyan-600" />
              </h4>

              <h4 className="flex items-center text-2xl text-slate-100 gap-4">
                <li>MongoDB</li>
                <SiMongodb className="h-8 w-8 text-yellow-300" />
              </h4>
            </div>
          </aside>
        </Flip>

        <main className="h-screen w-[550px] mt-1">
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
          <p className="text-center text-[20px] text-yellow-300 font-bold underline">
            PROJECTS
          </p>
        </aside>
      </div>

      <footer className="hidden tablet:flex justify-center bg-cyan-900 h-16 w-full items-center fixed bottom-0">
        <p className="text-center text-yellow-300 text-[18px] p-4 font-bold">
          &copy; 2024 Oyedokun V. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
