import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-pink-700 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">Wedding Invitation</h1>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><a href="#our-story" className="hover:text-pink-300">Our Story</a></li>
            <li><a href="#photos" className="hover:text-pink-300">Photos Album</a></li>
            <li><a href="#contact" className="hover:text-pink-300">Contact</a></li>
            <li><a href="#menu" className="hover:text-pink-300">Menu</a></li>
            <li><a href="#direction" className="hover:text-pink-300">Direction</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;