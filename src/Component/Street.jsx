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
                        <div key={index}
                             className="rounded-lg group rounded-tr-[80px] border border-white/10 bg-white/10 text-center group backdrop-blur-md p-4 hover:border-t-yellow-500 hover:border-l-amber-500 hover:border-r-pink-500 hover:border-b-pink-500">
                            <h2 className="lg:text-2xl text-xl text-white font-semibold">{item.title}</h2>
                            <img alt={item.title} className="mx-auto my-[25px]"
                                 src={item.image}/>
                            <div className="mb-10"><span
                                className="bg-gradient-to-r inline-block mb-1 from-yellow-400 to-pink-400 bg-clip-text text-transparent text-3xl leading-[38px] font-semibold">{item.sub1}</span>
                                <p className="font-normal text-sm text-gray-200">{item.sub2}</p>
                            </div>
                            <span
                                className="text-base inline-block text-white cursor-pointer py-3.5 px-5 border rounded-full transition-all duration-500 border-purple-700 group-hover:border-transparent group-hover:bg-gradient-to-r from-purple-600 to-pink-500">{item.button}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Street;