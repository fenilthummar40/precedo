import { useState, useEffect } from "react";
import { assets } from "../assets/assets.js";
import { IconMenu } from "@tabler/icons-react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

                <div className="flex items-center">
                    <img className="w-40" src={assets.logo} alt="logo" />
                </div>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        <li><a className="text-white font-semibold md:text-xs lg:text-lg" href="#">Home</a></li>
                        <li><a className="text-gray-300 hover:text-white md:text-xs lg:text-lg" href="#">Z-Score</a></li>
                        <li><a className="text-gray-300 hover:text-white md:text-xs lg:text-lg" href="#">Why Precedo</a></li>
                    </ul>
                </nav>

                <div className="hidden md:flex items-center gap-6">

                    <div className="flex items-center">
                        <div className="flex -space-x-3">
                            {[assets.image_1, assets.image_2, assets.image_3, assets.image_4].map((img, i) => (
                                <img key={i} className="w-8 h-8 rounded-full border-2 border-slate-700 cursor-pointer" src={img} alt="" />
                            ))}
                        </div>

                        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-2xl text-white text-sm font-medium">
                            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                                +158 Users Online
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <Login/>
                        <Signup/>
                    </div>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <IconMenu />
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden px-6 pb-6 bg-[#0B1A2A]">
                    <ul className="flex flex-col gap-4 mt-4">
                        <li><a className="text-white" href="#">Home</a></li>
                        <li><a className="text-gray-300" href="#">Z-Score</a></li>
                        <li><a className="text-gray-300" href="#">Why Precedo</a></li>
                    </ul>

                    <div className="mt-5">
                        <Login/>
                    </div>

                    <div className="mt-5">
                        <Signup/>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;