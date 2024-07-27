import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faDownload } from "@fortawesome/free-solid-svg-icons";
import { routes } from "../routes";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full py-3">
      <div className="flex flex-row justify-between items-center px-4">
        <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white">
          Manoj Nandakumar
        </div>
        <div className="hidden flex-grow md:flex flex-row items-end justify-end gap-2">
          {routes.map((route) => (
            
            
            <Link
              href={route.route}
              key={route.name}
              className={`flex h-max py-2 pr-2 pl-1 ${
                pathname === route.route
                  ? " bg-primary-dark text-white hover:bg-primary-light"
                  : " text-white hover:bg-primary-very_light hover:text-white "
              } `}>
                 
          
            
          {/* <div className="flex items-center justify-center font-bold text-sm h-full"> */}
         {route.name}
              {/* </div> */}
          
              
            </Link>
          ))}
         <Link
              href="/ManojNandakumar_Resume_SDE.pdf" 
              download="ManojNandakumar_Resume_SDE"
              target="_blank"
              key='Resume'
              className={`flex h-max py-2 pr-2 pl-1 text-white hover:bg-primary-very_light hover:text-white "
              } `}>
                 
          
            
          {/* <div className="flex items-center justify-center font-bold text-sm h-full"> */}
          <FontAwesomeIcon className="pt-1 pr-1" icon={faDownload} size="1x" /> Resume
              {/* </div> */}
          
              
            </Link>
        </div>
    
      

        <button className="text-white md:hidden" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="2x" />
        </button>
      </div>
      <div className={`md:hidden md:flex md:items-center md:justify-between ${isOpen ? "block" : "hidden"} md:block`}>
        <div className="flex flex-col md:flex-row md:gap-2 mt-2 md:mt-0">
          {routes.map((route) => (
            <Link
              href={route.route}
              key={route.name}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === route.route
                  ? "bg-primary-dark text-white hover:bg-primary-light"
                  : "text-white hover:bg-primary-very_light"
              }`}
            >
              {route.name}
            </Link>
          ))}
          <Link
            href="/ManojNandakumar_Resume_SDE.pdf"
            download="ManojNandakumar_Resume_SDE"
            target="_blank"
            key="Resume"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-primary-very_light"
          >
            <FontAwesomeIcon className="mr-1" icon={faDownload} size="1x" />
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
