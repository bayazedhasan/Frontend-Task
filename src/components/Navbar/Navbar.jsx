import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>

            {/* ================= DESKTOP NAV ================= */}
            <div className="hidden lg:block absolute top-5 left-6 right-120 z-20">
                <div className="w-130 container mx-auto border-2 border-gray-300 bg-[#0b0c10] rounded-full h-15 flex items-center px-8 relative">

                    <div className="flex gap-10 items-center text-white/90 font-medium text-sm flex-1">
                        <Link to="/" className="hover:text-white transition">Home</Link>
                        <Link to="/location" className="hover:text-white transition">Our gym location</Link>
                    </div>

                    <div className="w-[1px] h-[25px] bg-white/30 mx-6"></div>

                    <div className="flex items-center gap-4 w-[120px] text-white/60 bg-white/10 px-6 py-2 rounded-full hover:bg-white/20 transition">
                        <span className="text-sm">Search</span>
                        <BsSearch className="text-white" size={16} />
                    </div>

                </div>
            </div>

            {/* ================= MOBILE TOP BAR ================= */}
            <div className="lg:hidden absolute top-8 left-10 right-4 z-30 flex justify-between items-center">
                <button
                    onClick={() => setOpen(!open)}
                    className="relative w-[50px] h-[50px] flex items-center justify-center hover:scale-110 transition"
                >

                    <div className={`absolute transition-all duration-300 ${open ? "opacity-0 scale-0 rotate-90" : "opacity-100 scale-100 rotate-0"}`}>
                        <div className="w-[60px] h-[60px] bg-[#7eba33] rounded-full flex flex-wrap items-center justify-center p-4">
                            <div className="w-[45%] h-[45%] border-[2px] border-white rounded-[4px] m-[2.5%]"></div>
                            <div className="w-[45%] h-[45%] border-[2px] border-white rounded-[4px] m-[2.5%]"></div>
                            <div className="w-[45%] h-[45%] border-[2px] border-white rounded-[4px] m-[2.5%]"></div>
                            <div className="w-[45%] h-[45%] border-[2px] border-white rounded-[4px] m-[2.5%]"></div>
                        </div>
                    </div>

                    <div className={`absolute transition-all duration-300 ${open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-0 -rotate-90"}`}>
                        <FaTimes size={22} className="text-black" />
                    </div>

                </button>

            </div>

            <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-[#0b0c10] z-20 transition-all duration-300
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-6 right-6 text-white hover:text-red-400 transition"
                >
                    <FaTimes size={26} />
                </button>

                <div className="flex flex-col items-center justify-center h-full gap-8 text-white text-lg">

                    <Link onClick={() => setOpen(false)} to="/">Home</Link>
                    <Link onClick={() => setOpen(false)} to="/location">Our gym location</Link>

                    <div className="flex items-center gap-4 w-33 text-white/60 bg-white/10 px-4 py-2 rounded-full">
                        <span>Search</span>
                        <BsSearch size={16} />
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Navbar;