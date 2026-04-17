import Title from "./Title.jsx";
import {assets} from "../assets/assets.js";

function Street() {

    const StreetData = [
        {
            title: "Large Cap Mutual Funds",
            sub1: "8.5%",
            sub2: "Average Yearly Return",
            button: "Get Started Now",
            image: assets.image_7
        },
        {
            title: "Top Hedge Funds",
            sub1: "10-15%",
            sub2: "Average Yearly Return",
            button: "Get Started Now",
            image: assets.image_8
        },
        {
            title: "Precedo",
            sub1: "17%",
            sub2: "Average Yearly Return",
            button: "Get Started Now",
            image: assets.image_9
        },
    ];

    return (
        <section className='py-10'>
            <Title text1={`Precedo’s AI Model Beats Wall Street`}/>

            <div className='max-w-7xl m-auto px-5'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {StreetData.map((item, index) => (
                        <div
                            key={index}
                            className="group p-[1.5px] rounded-tr-[80px] rounded-xl bg-transparent hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 transition">
                            <div
                                className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] rounded-tr-[80px] rounded-xl flex items-center justify-center flex-col gap-5 py-6">
                                <h1 className="font-semibold text-2xl text-white">{item.title}</h1>
                                <img src={item.image} alt={item.title}/>
                                <h2 className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent text-3xl font-semibold">{item.sub1}</h2>
                                <p className="text-gray-400 text-sm">{item.sub2}</p>
                                <button type="button"
                                        className="border border-pink-500 text-white px-6 py-3 rounded-full font-semibold text-sm cursor-pointer group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-pink-500 transition">
                                    {item.button}</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Street;