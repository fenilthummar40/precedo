import Title from "./Title.jsx";
import {assets} from "../assets/assets.js";

function Game() {

    const GameData = [
        {
            number: "01",
            title: "Upload your portfolio directly from your brokerage account",
            description: "Trust them with the trading, they’re actual pros!",
            image: assets.image_10,
            color: "bg-pink-400"
        },
        {
            number: "02",
            title: "Precedo’s AI Model Pinpoints Vulnerabilities in Your Portfolio",
            description: "When they win, you keep over 70% of the profits!",
            image: assets.image_11,
            color: "bg-green-400"
        },
        {
            number: "03",
            title: "Watch your Profits Grow",
            description: "Pocket some, leave some in the moonbags!",
            image: assets.image_12,
            color: "bg-blue-400"
        },
    ];

    return (
        <section className='py-10'>

            <div className='max-w-7xl mx-auto px-5'>

                <Title text1="Beat Wall Street at Its Own Game with AI"/>
                <div className="relative w-full my-12 hidden lg:block">
                    <div
                        className="absolute top-3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {GameData.map((item, index) => (
                            <div key={index} className="flex flex-col items-center relative z-10">
                                <div className="relative flex items-center justify-center">
                                    <div
                                        className="w-6 h-6 rounded-full border border-gray-400/40 flex items-center justify-center bg-[#0f172a]">
                                        <div
                                            className={`w-2.5 h-2.5 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`}></div>
                                    </div>
                                </div>
                                <div className={`w-[2px] h-8 mt-1 ${item.color}`}></div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {GameData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] rounded-lg rounded-tr-[80px] flex items-center justify-center flex-col gap-5 py-6 px-2">
                            <span
                                className='rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] flex items-center justify-center p-5 text-white font-semibold text-xl'>
                                {item.number}
                            </span>
                            <h1 className='text-white font-semibold text-xl text-center'>{item.title}</h1>
                            <p className='text-gray-400 font-normal text-sm text-center px-2'>{item.description}</p>
                            <img src={item.image} alt={item.title}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Game;