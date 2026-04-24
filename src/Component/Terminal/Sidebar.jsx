import {assets} from "../../assets/assets.js";
import {
    IconChevronDown,
    IconDashboard,
    IconHome,
    IconLogout,
    IconMenu,
    IconPlus,
    IconTerminal
} from "@tabler/icons-react";
import {Link} from "react-router-dom";
import {useState} from "react";

function Sidebar() {

    const [open, setOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(true);

    const history = [
        "Test", "SDV", "AAPL",
        "Tesla stock next 6 months?",
        "Hi", "AAPL", "AAPL", "Test", "SDV", "AAPL",
        "Tesla stock next 6 months?",
        "Hi", "AAPL", "AAPL",
    ];

    return (
        <section
            className={`bg-slate-700 p-2 h-screen relative transition-all duration-300 ${isOpen ? "w-64" : "w-16"}`}>
            <div className='flex items-center justify-between h-10'>
                {isOpen && (
                    <img className='h-10' src={assets.logo_white} alt=""/>
                )}
                <IconMenu onClick={() => setIsOpen(!isOpen)} className='w-5 h-5 text-white cursor-pointer'/>
            </div>
            <div className='flex flex-col mt-6 gap-2'>
                <Link to='/Dashboard' className='flex items-center gap-3 text-white p-2 rounded-md hover:bg-slate-800'>
                    <IconHome className='w-5 h-5'/>{isOpen && "Home"}
                </Link>

                <Link to='/Portfolio-Dashboard' className='flex items-center gap-3 text-white p-2 rounded-md hover:bg-slate-800'>
                    <IconDashboard className='w-5 h-5'/>{isOpen && "Portfolio Dashboard"}
                </Link>
            </div>

            <div className="mt-4">
                <div onClick={() => isOpen && setOpen(!open)}
                     className="flex items-center justify-between text-white p-2 rounded-md hover:bg-slate-800 cursor-pointer">
                    <Link to="/Terminal" onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-3"><IconTerminal className="w-5 h-5"/>{isOpen && "Terminal"}
                    </Link>

                    {isOpen && (
                        <IconChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}/>
                    )}
                </div>

                {isOpen && (
                    <div
                        className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[300px] mt-2" : "max-h-0"}`}>
                        <div className="p-3 h-[300px] overflow-y-auto border border-gray-600 rounded-md no-scrollbar">
                            <h6 className="text-gray-300 text-sm mb-2">History</h6>
                            {history.map((item, index) => (
                                <div key={index}
                                     className="p-2 text-white rounded-md hover:bg-slate-800 cursor-pointer truncate">{item}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className='flex flex-col absolute bottom-4 w-full pr-2 gap-2'>
                <Link to='#' className='flex items-center gap-3 p-2 rounded-md text-white hover:bg-slate-800'>
                    <IconPlus className='w-5 h-5'/>{isOpen && "New Chat"}
                </Link>

                <Link to='#' className='flex items-center gap-3 p-2 rounded-md text-white hover:bg-slate-800'>
                    <IconLogout className='w-5 h-5'/>{isOpen && "Logout"}
                </Link>
            </div>
        </section>
    );
}

export default Sidebar;