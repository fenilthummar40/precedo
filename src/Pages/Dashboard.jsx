import Sidebar from "../Component/Terminal/Sidebar.jsx";
import Header from "../Component/Terminal/Header.jsx";
import MultiSelectDropdown from "../Component/Terminal/MultiSelectDropdown.jsx";
import Message from "../Component/Terminal/Message.jsx";

function Dashboard() {
    const companySizes = ["Small", "Medium", "Large"];
    const industries = [];

    return (
        <section>
            <div className="flex">
                <Sidebar/>

                <div className="flex-1">
                    <Header/>

                    <section className="bg-slate-900 h-[calc(100vh-60px)]">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
                            <div className="bg-slate-700 p-4 rounded-md">
                                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
                                    <h1 className="text-xl text-white">Top Company’s</h1>
                                    <div className="flex items-center justify-center flex-wrap gap-4">
                                        <MultiSelectDropdown label="Industry" options={industries}/>
                                        <MultiSelectDropdown label="Company Size" options={companySizes}/>
                                    </div>
                                </div>
                                <hr className='my-4 border-gray-600'/>
                            </div>

                            <div className="bg-slate-700 p-4 rounded-md">
                                <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
                                    <h1 className="text-xl text-white">Top Newest Co.</h1>
                                    <div className="flex items-center justify-center flex-wrap gap-4">
                                        <MultiSelectDropdown label="Industry" options={industries}/>
                                        <MultiSelectDropdown label="Company Size" options={companySizes}/>
                                    </div>
                                </div>
                                <hr className='my-4 border-gray-600'/>
                            </div>
                        </div>

                        <Message/>
                    </section>

                </div>
            </div>
        </section>
    );
}

export default Dashboard;