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
    const history = [
        "Test", "SDV", "AAPL",
        "What do you think is going to happen with Tesla stock in the next 6 months?",
        "Hi", "AAPL", "AAPL", "AAPL",
        "Test", "SDV", "Hello", "Test", "SDV", "AAPL",
        "What do you think is going to happen with Tesla stock in the next 6 months?",
        "Hi", "AAPL", "AAPL", "AAPL",
        "Test", "SDV", "Hello",
    ];

    return (
        <>
            <section className='bg-slate-700 p-2 h-screen relative'>
                <div className='flex items-center justify-between'>
                    <img className='h-10' src={assets.logo_white} alt=""/>
                    <IconMenu className='w-4 h-4 text-white cursor-pointer'/>
                </div>

                <div className='flex flex-col mt-4'>
                    <Link to='#'
                          className='flex items-center gap-2 text-white  max-sm:text-sm p-2 rounded-md hover:bg-slate-800'><IconHome
                        className='w-4 h-4'/> Home</Link>
                    <Link to='#'
                          className='flex items-center gap-2 text-white  max-sm:text-sm p-2 rounded-md hover:bg-slate-800'><IconDashboard
                        className='w-4 h-4'/> Portfolio Dashboard</Link>
                </div>

                <div>
                    <div onClick={() => setOpen(!open)}
                         className="flex items-center justify-between text-white p-2 rounded-md hover:bg-slate-800 cursor-pointer">
                        <Link to="/Terminal"
                              onClick={(e) => e.stopPropagation()} className="flex items-center gap-2">
                            <IconTerminal className="w-4 h-4"/>Terminal
                        </Link>
                        <IconChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}/>
                    </div>

                    <div
                        className={`transition-all duration-300 overflow-hidden ${open ? "max-h-[400px] mt-2" : "max-h-0"}`}>
                        <div className="p-3 h-[400px] overflow-y-auto no-scrollbar border border-gray-600 rounded-md">
                            <h6 className="text-gray-300 text-sm mb-3">History</h6>
                            <div className="flex flex-col gap-1">
                                {history.map((item, index) => (
                                    <div key={index}
                                         className="p-2 text-white rounded-md hover:bg-slate-800 cursor-pointer truncate">{item}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col absolute bottom-4 w-full pr-4'>
                    <Link to='#'
                          className='flex items-center gap-2 p-2 rounded-md text-white hover:bg-slate-800'><IconPlus
                        className='w-4 h-4'/> New Chat</Link>
                    <Link to='#'
                          className='flex items-center gap-2 p-2 rounded-md text-white hover:bg-slate-800'><IconLogout
                        className='w-4 h-4'/> Logout</Link>
                </div>
            </section>
        </>
    );
}

export default Sidebar;
