import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 px-32 text-white py-2 ">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">Florence<span className="text-green-400">.</span></div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <ul className={`flex space-x-4 md:space-x-8 md:flex ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent z-10`}>
        <Link to="/"><li><a href="#home" className="block py-2 px-4 hover:text-green-400">Home</a></li></Link> 
          <li><a href="#services" className="block py-2 px-4 hover:text-green-400">Services</a></li>
          <li><a href="#resume" className="block py-2 px-4 hover:text-green-400">Resume</a></li>
          <li><a href="#work" className="block py-2 px-4 hover:text-green-400">Work</a></li>
          <li><a href="#contact" className="block py-2 px-4 hover:text-green-400">Contact</a></li>
        </ul>
       <Link to="https://github.com/uwinezaflorence20"> <button className="hidden md:block bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-600">Hire me</button>
      </Link></div>
    </nav>
  );
};

export default Navbar;
