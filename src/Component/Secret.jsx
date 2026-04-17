import Title from "./Title.jsx";
import {
    IconBan,
    IconCalendar,
    IconChartBar,
    IconCurrencyDollar,
    IconGauge,
    IconMusic, IconTrendingUp,
    IconTrophy,
    IconWallet
} from "@tabler/icons-react";

function Secret() {

    return (
        <>
            <section className='py-10'>
                <div className='max-w-7xl mx-auto px-5'>
                    <div>
                        <p className='bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent text-center font-medium text-lg'>Hello Precedo Score</p>
                        <Title text1={`Your (Not so)Secret Sauce to Success`}/>
                        <p className='text-white text-center font-normal text-sm lg:text-lg line-clamp-2'>The Precedo AI algorithm uses
                            intricate weighting and multifaceted factors like profitability, risk, <br/> and consistency
                            to identify top traders. Only the best traders can be listed on Precedo.</p>
                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mt-10'>
                        <div className='flex flex-col items-center lg:items-end'>
                            <span
                                className='font-medium text-sm lg:text-xl text-white rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-10 lg:px-20 py-2 flex items-end justify-end mb-5 gap-5'><IconGauge
                                className='text-pink-500'/> Risk</span>
                            <span
                                className='font-medium text-sm lg:text-xl text-white rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-10 lg:px-20 py-2 flex items-end justify-end mb-5 gap-5'><IconTrophy
                                className='text-pink-500'/> Profits</span>
                            <span
                                className='font-medium text-sm lg:text-xl text-white rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-10 lg:px-20 py-2 flex items-end justify-end mb-5 gap-5'><IconChartBar
                                className='text-pink-500'/> Beats the Market</span>
                            <span
                                className='font-medium text-sm lg:text-xl text-white rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-10 lg:px-20 py-2 flex items-end justify-end mb-5 gap-5'><IconCalendar
                                className='text-pink-500'/>     Days in Profit</span>
                        </div>
                        <div className='flex items-center justify-center'>
                            <div className='flex items-center justify-center flex-col'>
                                <span
                                    className='bg-purple-500 rounded-full px-10 p-5 text-white text-sm lg:text-xl font-medium hidden lg:block'>Precedo <p
                                    className='flex'><IconMusic/> 100</p></span>
                            </div>
                        </div>
                        <div className='flex flex-col items-center lg:items-start'>
                            <span
                                className='font-medium text-sm lg:text-xl text-white rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-10 lg:px-20 py-2 flex items-end justify-end mb-5 gap-5'><IconCurrencyDollar
                                className='text-pink-500'/> Assets</span>
                            <span
                                className='font-medium text-sm lg:text-xl text-white rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-10 lg:px-20 py-2 flex items-end justify-end mb-5 gap-5'><IconWallet
                                className='text-pink-500'/> Timely Payouts</span>
                            <span
                                className='font-medium text-sm lg:text-xl text-white rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-10 lg:px-20 py-2 flex items-end justify-end mb-5 gap-5'><IconTrendingUp
                                className='text-pink-500'/> Asset Growth</span>
                            <span
                                className='font-medium text-sm lg:text-xl text-white rounded-full bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-10 lg:px-20 py-2 flex items-end justify-end mb-5 gap-5'><IconBan
                                className='text-pink-500'/> Zero Leverage</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Secret;
