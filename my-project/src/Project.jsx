import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Flip } from "react-reveal";


const Project = () => {

    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-screen h-screen bg-cyan-950 tablet:w-screen">
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
      </div>
  )
}

export default Project