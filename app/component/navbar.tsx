import Link from "next/link";
import Image from 'next/image'
import { usePathname } from "next/navigation";
import { routes } from "../routes";
import '../styles/globals.css';
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full py-3">
      
       <div className="flex flex-row gap-10">
        <div className="flex-1"> 
          <div className=" text-xl sm:text-2xl md:text-4xl lg:text-5xl text-white">Manoj Nandakumar.</div>
          </div>
        <div className="flex-grow flex flex-row items-end justify-end gap-2">
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
        </div>
      
    </nav>
  );
}
