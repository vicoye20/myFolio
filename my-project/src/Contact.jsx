import { React, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Flip, Zoom } from "react-reveal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [form, setForm] = useState({
    surName: "",
    firstName: "",
    phoneNumber: "",
    email: "",
    companyName: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="w-screen h-screen bg-cyan-950">
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

        <Flip top>
          <nav className="flex flex-row justify-between items-center p-2 tablet:hidden">
            <h1 className="font-bold text-slate-100 text-[20px]">
              Oyedokun V.
            </h1>
            <button onClick={toggleMenu}>
              <RxHamburgerMenu className="h-6 w-6 text-slate-100" />
            </button>
            {isOpen && (
              <div className="flex flex-col w-32 h-36 bg-cyan-900 font-bold text-[18px] text-slate-100 gap-2 items-center absolute right-0 top-8">
               <NavLink to="/">
                  <button className="hover:text-green-500">Home</button>
                </NavLink>
                <NavLink to="/project">
                  <button className="hover:text-green-500">Projects</button>
                </NavLink>
                <NavLink to="/contact">
                  <button className="hover:text-green-500">Contact</button>
                </NavLink>
                <NavLink to="/about">
                  <button className="hover:text-green-500">About</button>
                </NavLink>
                
              </div>
            )}
          </nav>
        </Flip>
      </header>

      <div className="m-auto pt-16 items-center flex flex-row justify-evenly gap-4">
        <button className="flex flex-row items-center gap-2 border-2 border-green-600 rounded-md text-slate-100 w-40 h-10 p-3">
          <FaWhatsapp />
          <a href="https://wa.me/2349055706732">WhatsApp Me!</a>
        </button>

        <button className="flex flex-row items-center gap-2 border-2 border-green-600 rounded-md text-slate-100 w-24 h-10 p-3">
          <FaGithub />
          <a href="https://github.com/vicoye20">GitHub</a>
        </button>
      </div>

      <Zoom>
        <div className="flex flex-col gap-2 m-auto mt-12 w-[100%] tablet:m-auto tablet:w-[50%]">
          <form className="flex flex-col gap-2 p-8" onSubmit={handleSubmit}>
            <h1 className="text-[25px] text-center text-slate-200 underline">
              Send a Message!
            </h1>
            <input
              required
              type="text"
              name="surName"
              value={form.surName}
              placeholder="Surname"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="text"
              name="firstName"
              value={form.firstName}
              placeholder="Firstname"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              placeholder="Phone number"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="email"
              name="email"
              value={form.email}
              placeholder="@email.com"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="text"
              name="companyName"
              value={form.companyName}
              placeholder="Company name"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <input
              required
              type="text"
              name="message"
              value={form.message}
              placeholder="Message"
              onChange={handleChange}
              className="rounded-md pl-4 p-2 w-full placeholder:text-lg placeholder:text-slate-600 focus:outline-none"
            />

            <button
              className="bg-slate-100 text-green-800 rounded-md p-2 w-full font-bold"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </Zoom>

      <footer className="bg-cyan-900 h-16 w-full items-center fixed bottom-0">
        <p className="text-center text-slate-100 text-[18px] p-4 font-bold">
          &copy; 2024 Oyedokun V. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
