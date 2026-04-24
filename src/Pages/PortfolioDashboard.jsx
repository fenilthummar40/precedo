import Sidebar from "../Component/Terminal/Sidebar.jsx";
import Header from "../Component/Terminal/Header.jsx";
import PerformanceChart from "../Component/Terminal/Chart/PerformanceChart.jsx";
import ScoreChart from "../Component/Terminal/Chart/ScoreChart.jsx";
import {IconCircleFilled, IconMenu} from "@tabler/icons-react";
import Message from "../Component/Terminal/Message.jsx";
import HoldingsChart from "../Component/Terminal/Chart/HoldingsChart.jsx";
import {useState} from "react";

function Portfolio() {

    const [activeTab, setActiveTab] = useState("Overview");
    const tabs = ["Overview", "Analysis", "News", "Notes"];
    const scores = [
        {title: "Fundamental Score", value: 82, color: "bg-green-400"},
        {title: "Social Media Sentiment", value: 74, color: "bg-blue-400"},
        {title: "Political Sentiment", value: 65, color: "bg-yellow-400"},
        {title: "Hedge Fund Sentiment", value: 91, color: "bg-purple-400"},
    ];

    return (
        <>
            <section>
                <div className='flex justify-between'>
                    <div className='flex'>
                        <Sidebar/>
                    </div>
                    <div className='flex-1'>
                        <Header/>

                        <section className='bg-slate-900 h-[calc(100vh-60px)] relative overflow-y-scroll no-scrollbar'>
                            <div className='flex flex-wrap md:flex-nowrap gap-5 p-5'>
                                <div className="bg-slate-700 text-white p-6 rounded-2xl w-full md:w-3/5 h-[400px]">
                                    <h2 className="text-xl font-semibold mb-2 flex items-center justify-between">Performance
                                        vs Market <IconMenu className='cursor-pointer'/></h2>
                                    <div className="flex gap-4 mb-2">
                                        <div className="bg-white/10 p-2 rounded-lg w-40 cursor-pointer">
                                            <p className="text-gray-400 text-sm">Total Value</p>ss
                                            <h3 className="text-lg font-bold">$12,000.00</h3>
                                        </div>

                                        <div className="bg-white/10 p-2 rounded-lg w-40 cursor-pointer">
                                            <p className="text-gray-400 text-sm">Total Value</p>
                                            <h3 className="text-lg font-bold">1/year</h3>
                                        </div>
                                    </div>

                                    <div className="flex justify-end gap-2 mb-2">
                                        {["1 Day", "1 Month", "1 Year", "All"].map((item) => (
                                            <button key={item}
                                                    className="px-3 py-1 text-sm bg-white/10 rounded-md hover:bg-slate-800 cursor-pointer">{item}
                                            </button>
                                        ))}
                                    </div>
                                    <PerformanceChart/>
                                </div>

                                <div className='w-full md:w-2/5'>
                                    <div className="bg-slate-700 text-white p-6 rounded-2xl h-[400px]">
                                        <h2 className="text-xl font-semibold mb-4 flex items-center justify-between">Precedo
                                            Score <IconMenu className='cursor-pointer'/></h2>
                                        <ScoreChart value={50}/>

                                        <div className="flex flex-wrap justify-center gap-3 mt-10 text-sm">
                                            <span
                                                className="bg-red-500/20 text-red-400 px-3 py-1 rounded-md cursor-pointer">0% - 40% Strong Sell</span>
                                            <span
                                                className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-md cursor-pointer">40% - 60% Don’t Buy</span>
                                            <span
                                                className="bg-gray-500/20 text-gray-300 px-3 py-1 rounded-md cursor-pointer">60% - 70% Watch List</span>
                                            <span
                                                className="bg-green-500/20 text-green-400 px-3 py-1 rounded-md cursor-pointer">70% - 80% Buy</span>
                                            <span
                                                className="bg-green-600/20 text-green-300 px-3 py-1 rounded-md cursor-pointer">80% - 100% Strong Buy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap md:flex-nowrap gap-5 p-5">
                                <div className="bg-slate-700 text-white p-6 rounded-2xl w-full md:w-3/5 h-[400px]">
                                    <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">Portfolio
                                        Overview <IconMenu className='cursor-pointer'/></h2>
                                    <div className="h-[300px]">
                                        <HoldingsChart/>
                                    </div>
                                </div>

                                <div className='w-full md:w-2/5'>
                                    <div className="bg-slate-700 text-white rounded-2xl py-4 px-6 h-[400px] relative">

                                        <div className="flex items-center justify-between mb-5">
                                            <div className='flex items-center gap-5'>
                                                <div
                                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                    <span className="text-sm">RD</span>
                                                </div>
                                                <div><h2 className="text-lg font-semibold">Ram Dani</h2></div>
                                            </div>
                                            <div><IconMenu className='cursor-pointer'/></div>
                                        </div>

                                        <div className="flex gap-6 border-b border-slate-700 mb-6">
                                            {tabs.map((tab) => (
                                                <button key={tab} onClick={() => setActiveTab(tab)}
                                                        className={`pb-3 text-sm transition cursor-pointer ${
                                                            activeTab === tab
                                                                ? "text-white border-b-2 border-green-500"
                                                                : "text-slate-400 hover:text-white"
                                                        }`}>{tab}
                                                </button>
                                            ))}
                                        </div>

                                        <div className="">
                                            {activeTab === "Overview" && (
                                                <p className="text-slate-400">Overview content goes here Lorem ipsum
                                                    dolor sit, amet consectetur adipisicing elit. Nemo cumque voluptates
                                                    beatae, illum aspernatur dolore aut delectus, similique, quas
                                                    molestias dolorum laborum esse autem alias non adipisci voluptatum
                                                    sequi assumenda.
                                                </p>
                                            )}

                                            {activeTab === "Analysis" && (
                                                <p className="text-slate-400">Analysis content Lorem ipsum dolor sit,
                                                    amet consectetur adipisicing elit. Nemo cumque voluptates beatae,
                                                    illum aspernatur dolore aut delectus, similique, quas molestias
                                                    dolorum laborum esse autem alias non adipisci voluptatum sequi
                                                    assumenda.
                                                </p>
                                            )}

                                            {activeTab === "News" && (
                                                <p className="text-slate-400">Latest news Lorem ipsum dolor sit,
                                                    amet consectetur adipisicing elit. Nemo cumque voluptates beatae,
                                                    illum aspernatur dolore aut delectus, similique, quas molestias
                                                    dolorum laborum esse autem alias non adipisci voluptatum sequi
                                                    assumenda.</p>
                                            )}

                                            {activeTab === "Notes" && (
                                                <p className="text-slate-400">Your notes Lorem ipsum dolor sit,
                                                    amet consectetur adipisicing elit. Nemo cumque voluptates beatae,
                                                    illum aspernatur dolore aut delectus, similique, quas molestias
                                                    dolorum laborum esse autem alias non adipisci voluptatum sequi
                                                    assumenda.</p>
                                            )}
                                        </div>

                                        <div className="absolute bottom-5">
                                            <p className="text-green-500 text-sm font-medium cursor-pointer">Precedo
                                                Score:</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="bg-slate-700 text-white p-6 rounded-3xl mx-5 shadow-lg">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-semibold">AI-Generated Scores</h2>
                                    <IconMenu className="cursor-pointer text-gray-300 hover:text-white transition"/>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                                    {scores.map((item, index) => (
                                        <div key={index}
                                             className="p-5 border border-gray-600 rounded-3xl bg-slate-700 hover:bg-slate-500 transition cursor-pointer">
                                            <div className="flex justify-between mb-3">
                                                <h3 className="font-medium text-sm">{item.title}</h3>
                                                <span className="text-sm font-semibold">{item.value}%</span>
                                            </div>

                                            <div className="w-full h-3 bg-gray-600 rounded-full overflow-hidden">
                                                <div
                                                    className={`${item.color} h-full rounded-full transition-all duration-700`}
                                                    style={{width: `${item.value}%`}}></div>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className="bg-slate-700 text-white p-6 rounded-3xl m-5 shadow-lg">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-2xl font-semibold">Target price and downside risk</h2>
                                    <IconMenu className="cursor-pointer text-gray-300 hover:text-white transition"/>
                                </div>
                                <hr className='my-2 border-gray-600'/>
                                <div className='flex items-center justify-center gap-5 mb-2'>
                                    <p className='text-sm flex items-center gap-1'><IconCircleFilled
                                        className='w-2 h-2 text-red-500'/> Downside Risk 0%</p>
                                    <p className='text-sm flex items-center gap-1'><IconCircleFilled
                                        className='w-2 h-2 text-green-500'/> Upside Potential 0%</p>
                                </div>
                                <div className='flex items-center justify-center gap-5 mt-2'>
                                    <p>Downside Risk</p>
                                    <div
                                        className='p-[2px] w-10/12 bg-gradient-to-r from-red-600 via-orange-600 via-yellow-600 to-green-500'></div>
                                    <p>Target Price</p>
                                </div>
                            </div>

                            <Message/>
                        </section>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;
