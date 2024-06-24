import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../src/image/ppp.png";
import { GiHamburgerMenu } from "react-icons/gi"
import { GiDevilMask } from "react-icons/gi";
import { Flip, Zoom } from "react-reveal";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-full bg-gray-900 tablet:w-screen">
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

      <li className="text-center text-2xl p-16 underline text-yellow-300 tablet:p-28 font-bold">
        About Me!
      </li>

      <div className="m-auto items-center w-44 h-44 -mt-5 tablet:hidden">
        <img src={image} alt="" className="w-44 h-44 rounded-full" />
      </div>

      <div className="hidden m-auto items-center w-44 h-44 -mt-20 tablet:flex">
        <img src={image} alt="" className="w-44 h-44 rounded-full" />
      </div>

      <p className="text-[18px] text-center text-slate-100 w-96 m-auto mt-10 tablet:hidden">
        Hello , I am Oyedokun Victor Ayobami. I'm a passionate full-stack
        developer with a knack for crafting robust and scalable web
        applications, I am a dedicated and versatile frontend developer with a
        passion for creating efficient and user-friendly web applications. With
        2 years of professional experience, I have worked with a variety of
        technologies, including JavaScript, React, Next.js, and I use Node.js for backend &
        MongoDB for database. My journey in web development began with a deep curiosity for
        how things work, and it has evolved into a career where I continuously
        strive to learn and adapt to new challenges. I thrive in collaborative
        environments and enjoy solving complex problems to deliver high-quality
        solutions. Outside of coding, I enjoy staying active, exploring new
        technologies, and contributing to open-source projects. My goal is to
        turn ideas into reality through code. With a keen eye for detail and a
        love for clean code, I strive to deliver high-quality and visually
        appealing web solutions. I would offer my full commitment, and be a
        pleasant and friendly addition to your team. I am therefore currently
        looking for a job or an internship as a frontend developer in your
        reputable company.
      </p>

      <Zoom>
        <p className="hidden tablet:flex text-[18px] text-center text-slate-100 font-bold p-4 mt-8 w-[75%] m-auto">
        Hello , I am Oyedokun Victor Ayobami. I'm a passionate full-stack
        developer with a knack for crafting robust and scalable web
        applications, I am a dedicated and versatile frontend developer with a
        passion for creating efficient and user-friendly web applications. With
        2 years of professional experience, I have worked with a variety of
        technologies, including JavaScript, React, Next.js, and I use Node.js for backend &
        MongoDB for database. My journey in web development began with a deep curiosity for
        how things work, and it has evolved into a career where I continuously
        strive to learn and adapt to new challenges. I thrive in collaborative
        environments and enjoy solving complex problems to deliver high-quality
        solutions. Outside of coding, I enjoy staying active, exploring new
        technologies, and contributing to open-source projects. My goal is to
        turn ideas into reality through code. With a keen eye for detail and a
        love for clean code, I strive to deliver high-quality and visually
        appealing web solutions. I would offer my full commitment, and be a
        pleasant and friendly addition to your team. I am therefore currently
        looking for a job or an internship as a frontend developer in your
        reputable company.
        </p>
      </Zoom>

      <footer className="bg-cyan-900 h-16 w-full items-center mt-4 tablet:hidden">
        <marquee behavior="" direction="left">
          <p className="text-center text-yellow-300 text-[18px] p-4 font-bold">
            &copy; 2024 Oyedokun V. All rights reserved.
          </p>
        </marquee>
      </footer>

      <footer className="hidden tablet:flex justify-center bg-cyan-900 h-16 w-full items-center mt-4">
        <p className="text-center text-yellow-300 text-[18px] p-4 font-bold">
          &copy; 2024 Oyedokun V. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default About;
