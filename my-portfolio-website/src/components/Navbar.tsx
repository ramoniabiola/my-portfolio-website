import React from 'react'

export const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between mt-8">
            <h1 className="ml-32 text-emerald-500 text-4xl font-bold  font-mono cursor-pointer">
                Ram<span className="text-4xl font-bold font-sans text-emerald-200">o</span>ni
            </h1>
            <ul className="flex items-center justify-center text-gray-400 mr-24 font-medium text-xl  cursor-pointer">
                {['Home', 'About', 'Portfolio', 'Services', 'Experience', 'Contact'].map((item, index) => (
                  <li key={index} className="relative mr-14 py-3 after:content-[''] after:h-1 after:w-0 after:bg-emerald-600 after:rounded after:absolute after:left-0 after:bottom-0 after:transition-all after:duration-600 after:ease-in-out after:transform after:-translate-y-0 hover:after:w-full hover:text-gray-100">
                    {item}
                  </li>
                ))}
            </ul>
        </nav>
    )  
};  
