import Title from "./Title.jsx";
import {
    IconChartBar,
    IconChartPie,
    IconCircleOff,
    IconMoneybag,
    IconTrophy,
    IconWallet
} from "@tabler/icons-react";

function Precedo() {

    const PrecedoData = [
        {
            icon: <IconMoneybag/>,
            title: 'PROVEN MODEL RELIABILITY',
            description: "Precedo’s AI model undergoes rigorous back-testing, simulating past market scenarios to ensure consistent performance."
        },
        {
            icon: <IconChartPie/>,
            title: 'PERSONALIZED PORTFOLIO ANALYSIS',
            description: "Precedo's AI customizes analysis to match your portfolio and goals, ensuring tailored insights for your investments."
        },
        {
            icon: <IconWallet/>,
            title: 'UNCOVER HIDDEN OPPORTUNITIES',
            description: "Precedo's algorithms identify undervalued stocks and missed opportunities, helping you capitalize on investments overlooked by Wall Street."
        },
        {
            icon: <IconChartBar/>,
            title: 'SEAMLESS INTEGRATION WITH YOUR BROKERAGE',
            description: "Easily connect your brokerage account to Precedo for quick, secure portfolio analysis without manual data entry."
        },
        {
            icon: <IconCircleOff/>,
            title: 'RISK MANAGEMENT FOCUS',
            description: "Precedo's highlights both potential gains and risks, helping you balance your portfolio for growth and stability."
        },
        {
            icon: <IconTrophy/>,
            title: 'OUTSMART WALL STREET',
            description: "Identify irrational moves on Wall Street and pinpoint how to capitalize on them, giving you a strategic advantage"
        },
    ];

    return (
        <section className='py-10'>
            <div className='max-w-7xl mx-auto px-5'>
                <Title text1="Why Trust Precedo?"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PrecedoData.map((item, index) => (
                        <div
                            className="group p-[1.5px] rounded-xl rounded-tr-[80px] border border-gray-700 hover:border-pink-500">
                            <div
                                className="h-full rounded-xl rounded-tr-[80px] p-6 flex flex-col gap-4 text-center border border-transparent">
                                <div
                                    className="text-pink-500 flex justify-center group-hover:text-purple-500 transition">{item.icon}</div>
                                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Precedo;