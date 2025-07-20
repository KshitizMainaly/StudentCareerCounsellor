import React from 'react';

function Navbar() {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Career Paths', href: '#' },
    { name: 'Resources', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-700 via-pink-500 to-purple-400 shadow-lg py-4 px-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center mb-2 md:mb-0">
          <img
            src="/logo.png"
            alt="CareerConnect Logo"
            className="h-10 w-10 mr-3 rounded-full shadow-md"
          />
          <span className="font-bold text-3xl text-white tracking-wide drop-shadow-lg">
            CareerConnect
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-2 md:gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-medium hover:text-pink-200 px-4 py-2 rounded transition duration-200 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-pink-300"
              aria-label={link.name}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-2 mt-2 md:mt-0">
          <button
            className="bg-white text-purple-700 font-semibold py-2 px-5 rounded-full shadow hover:bg-purple-100 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={() => alert('Register functionality not implemented yet')}
          >
            Register
          </button>
          <button
            className="bg-pink-500 text-white font-semibold py-2 px-5 rounded-full shadow hover:bg-pink-400 transition duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400"
            onClick={() => alert('Login functionality not implemented yet')}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;