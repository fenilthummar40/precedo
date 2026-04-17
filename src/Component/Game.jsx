import Title from "./Title.jsx";
import {assets} from "../assets/assets.js";

function Game() {

    const GameData = [
        {
            number: "01",
            title: "Upload your portfolio directly from your brokerage account",
            description: "Trust them with the trading, they’re actual pros!",
            image: assets.image_10
        },
        {
            number: "02",
            title: "Precedo’s AI Model Pinpoints Vulnerabilities in Your Portfolio",
            description: "When they win, you keep over 70% of the profits!",
            image: assets.image_11
        },
        {
            number: "03",
            title: "Watch your Profits Grow",
            description: "Pocket some, leave some in the moonbags!",
            image: assets.image_12
        },
    ];

    return (
        <section className='py-10'>

            <div className='max-w-7xl mx-auto px-5'>
                <Title text1="Beat Wall Street at Its Own Game with AI"/>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {GameData.map((item, index) => (
                        <div key={index}
                             className="bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] rounded-lg rounded-tr-[80px] flex items-center justify-center flex-col gap-5 py-6 px-2">
                            <span
                                className='rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] flex items-center justify-center p-5 text-white font-semibold text-xl'>{item.number}</span>

                            <h1 className='text-white font-semibold text-xl text-center'>{item.title}</h1>
                            <p className='text-gray-500 font-normal text-sm'>{item.description}</p>
                            <img src={item.image} alt={item.title}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Game;