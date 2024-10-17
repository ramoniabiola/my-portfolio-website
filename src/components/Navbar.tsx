import React from 'react'

export const Navbar = () => {
    return (
        <nav className="w-full flex items-center justify-between mt-8">
            <h1 className="ml-32 text-emerald-500 text-4xl font-bold  font-mono cursor-pointer">
                Ram<span className="text-4xl font-bold font-sans text-emerald-200">o</span>ni
            </h1>
            <ul className="flex items-center justify-center text-gray-400 mr-24 font-bold text-xl  cursor-pointer">
                {['Home', 'About', 'Portfolio', 'Services', 'Experience', 'Contact'].map((item, index) => (
                  <li key={index} className="mr-14 hover:text-emerald-600">
                    {item}
                  </li>
                ))}
            </ul>
        </nav>
    )  
};  
