import React from "react";
import { useState } from "react";

const Navbar = () => {
   const [open, setOpen] = useState(false);

  return (
     <nav className="bg-black/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">IELTS Academy</h1>

        
        <ul className="hidden md:flex gap-6 font-medium text-white">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#features" className="hover:text-blue-400">Courses</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        
        <button 
          className="md:hidden text-2xl text-white"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-black/80 text-white shadow">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#features" className="hover:text-blue-400">Courses</a></li>
          <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
