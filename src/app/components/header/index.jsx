"use client";  

import Link from "next/link";  
import { usePathname } from "next/navigation";  

const Header = () => {  
  const pathname = usePathname();

  console.log("Current pathname:", pathname);  

  return (  
    <header className="bg-sky-600 p-4">  
      <div className="container mx-auto flex justify-between items-center">  
        <div className="bg-white text-sky-600 px-4 py-3 rounded-lg cursor-pointer">  
          Next Pro Shop  
        </div>  
        {pathname !== "/" && (  
          <Link href="/" className="bg-white text-sky-600 px-4 py-3 rounded-lg ">  
            main page  
          </Link>  
        )}  
      </div>  
    </header>  
  );  
};  

export default Header;  