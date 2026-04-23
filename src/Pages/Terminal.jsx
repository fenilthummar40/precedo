import Sidebar from "../Component/Terminal/Sidebar.jsx";
import Header from "../Component/Terminal/Header.jsx";
import {IconSend} from "@tabler/icons-react";

function Terminal() {
    return (
        <>
            <section>
                <div className='flex justify-between'>
                    <div className='w-64'>
                        <Sidebar/>
                    </div>
                    <div className='w-full'>
                        <Header/>

                        <section className='bg-slate-800 h-[calc(100vh-60px)] relative'>
                            <div className='w-full h-full flex items-center justify-center'>
                                <h1 className='text-4xl text-gray-600 font-semibold'>Precedo AI</h1>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-4">
                                <div className="max-w-4xl mx-auto relative">
                                    <input type="text" placeholder="Message Precedo"
                                           className="w-full bg-white/10 text-white placeholder-gray-400 rounded-lg p-4 pr-12 focus:outline-none"/>
                                    <button
                                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-md hover:bg-white/20 cursor-pointer">
                                        <IconSend className='text-white'/>
                                    </button>

                                </div>
                            </div>
                        </section>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Terminal;
