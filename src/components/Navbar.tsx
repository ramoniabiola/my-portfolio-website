import { MenuOutlined, Close } from "@mui/icons-material";
import React, { useState } from "react";

export const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <nav className="w-full flex items-center justify-between mt-8 relative">
            <h1 className="md:ml-32 ml-10 text-emerald-500 text-4xl font-bold font-mono cursor-pointer">
                Ram<span className="text-4xl font-bold font-sans text-emerald-200">o</span>ni
            </h1>

            {/* Hamburger Menu Icon (Visible on Mobile Only) */}
            <div className="md:hidden mr-10 mt-1">
                <MenuOutlined
                    className="text-gray-300 cursor-pointer"
                    onClick={() => setIsNavOpen(true)}
                    style={{ fontSize: "36px" }}
                />
            </div>

            {/* Overlay (Visible on Mobile Only) */}
            {isNavOpen && (
                <div
                    className="fixed inset-0 bg-white/20 z-10"
                    onClick={() => setIsNavOpen(false)}
                />
            )}

            <ul 
                className={`fixed top-0 right-0 w-3/4 h-full font-bold text-xl flex flex-col items-start gap-6 bg-gray-900 text-white cursor-pointer  transition-transform duration-300 ease-in-out transform md:static md:w-auto md:h-auto md:bg-transparent md:text-gray-400 md:mr-24 md:flex-row md:items-center md:gap-8 p-8 md:p-0 ${
                    isNavOpen ? "translate-x-0 z-20"
                    : "translate-x-full md:translate-x-0"
                }`}
            >
                {/* Close Icon (Visible on Mobile Only) */}
                {isNavOpen && (
                    <div className="self-end mb-4 md:hidden">
                        <Close
                            className="text-gray-300 cursor-pointer p-[6px] border-2 border-gray-700 rounded-full"
                            onClick={() => setIsNavOpen(false)}
                            style={{ fontSize: "36px" }}
                        />
                    </div>
                )}

                {['Home', 'About', 'Portfolio', 'Services', 'Experience', 'Contact'].map((item, index) => (
                    <li
                        key={index}
                        className="w-full md:w-auto text-left md:text-center ml-6 md:ml-0 md:mr-8 hover:text-emerald-600"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};
