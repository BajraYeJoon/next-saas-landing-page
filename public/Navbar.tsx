import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNav = () => {
    setNavbar(!navbar);
  };

  //  navigation items
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Services" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="absolute top-0 z-50 mx-auto flex h-20 w-full items-center justify-between px-6 text-gray-50  md:px-10">
      {/* Logo */}
      <h1 className="leading-2 w-full text-2xl font-medium leading-4 tracking-wider md:text-4xl">
        Business Logo
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:gap-10">
        {navItems.map((item) => (
          <li
            key={item.id}
            className=" cursor-pointer transition-all delay-75  "
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden">
        {navbar ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          navbar
            ? "fixed left-0 top-0 h-full w-[60%] border-l border-l-gray-600 bg-[#000300] duration-500 ease-in-out md:hidden"
            : "fixed bottom-0 left-[-100%] top-0 w-[60%] duration-500 ease-in-out"
        }
      >
        {/* Mobile Logo */}
        <h1 className="m-4 w-full text-3xl font-bold">Business Logo</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="cursor-pointer rounded-xl border-b border-gray-600 p-4 duration-300 hover:bg-[#00df9a] hover:text-black"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
