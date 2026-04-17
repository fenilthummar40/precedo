import {useState} from "react";
import {assets} from "../assets/assets.js";
import {IconMenu} from "@tabler/icons-react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">

                <div className="flex items-center">
                    <img className="w-40" src={assets.logo} alt="logo"/>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        <li><a className="text-white font-semibold md:text-xs lg:text-lg" href="#">Home</a></li>
                        <li><a className="text-gray-300 hover:text-white md:text-xs lg:text-lg" href="#">Z-Score</a>
                        </li>
                        <li><a className="text-gray-300 hover:text-white md:text-xs lg:text-lg" href="#">Why Precedo</a>
                        </li>
                    </ul>
                </nav>

                <div className="hidden md:flex items-center gap-6">

                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-3">
                            {[assets.image_1, assets.image_2, assets.image_3, assets.image_4].map((img, i) => (
                                <img key={i} className="w-8 h-8 rounded-full border-2 border-[#0f172a]" src={img}
                                     alt=""/>
                            ))}
                        </div>

                        <div
                            className="bg-white/10 backdrop-blur-md bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent md:text-xs lg:text-sm px-3 py-1 rounded-full border border-white/20">
                            +158 Users Online
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-white hover:text-gray-300 md:text-xs lg:text-lg">Log in</button>
                        <button
                            className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full md:text-xs lg:text-lg">
                            Sign Up
                        </button>
                    </div>
                </div>

                <button
                    className="md:hidden text-white"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    <IconMenu/>
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden px-6 pb-6">
                    <ul className="flex flex-col gap-4 mt-4">
                        <li><a className="text-white" href="#">Home</a></li>
                        <li><a className="text-gray-300" href="#">Z-Score</a></li>
                        <li><a className="text-gray-300" href="#">Why Precedo</a></li>
                    </ul>

                    <div className="mt-6 flex flex-col gap-3">
                        <button className="text-white text-left">Log in</button>
                        <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                            Sign Up
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;