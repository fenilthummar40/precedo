import Title from "./Title.jsx";
import {
    IconBan,
    IconCalendar,
    IconChartBar,
    IconCurrencyDollar,
    IconGauge,
    IconMusic,
    IconTrendingUp,
    IconTrophy,
    IconWallet
} from "@tabler/icons-react";
import LeftItem from "./LeftItem.jsx";
import RightItem from "./RightItem.jsx";
import {assets} from "../assets/assets.js";

function Secret() {
    return (
        <section className='py-10'>
            <div className='max-w-7xl mx-auto px-5'>

                <div className="text-center">
                    <p className='bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent font-medium text-lg'>
                        Hello Precedo Score
                    </p>

                    <Title text1={`Your (Not so) Secret Sauce to Success`} />

                    <p className='text-white text-sm lg:text-lg mt-3'>
                        The Precedo AI algorithm uses intricate weighting and multifaceted factors like profitability,
                        risk, and consistency to identify top traders.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-16 items-center'>
                    <div className='flex flex-col items-end'>
                        <div className='flex items-center justify-end relative'>
                            <LeftItem icon={<IconGauge />} text="Risk" />
                            <img className='absolute -right-34 top-6 hidden lg:block' src={assets.image_25} alt=""/>
                        </div>
                       <div className='flex items-center justify-end relative'>
                           <LeftItem icon={<IconTrophy />} text="Profits" />
                           <img className='absolute -right-36 top-6 hidden lg:block' src={assets.image_27} alt=""/>
                       </div>
                        <div className='flex items-center justify-end relative'>
                            <LeftItem icon={<IconChartBar />} text="Beats the Market" />
                            <img className='absolute -right-40 -top-2 hidden lg:block' src={assets.image_26} alt=""/>
                        </div>
                        <div className='flex items-center justify-end relative'>
                            <LeftItem icon={<IconCalendar />} text="Days in Profit" />
                            <img className='absolute -right-40 -top-20 hidden lg:block' src={assets.image_28} alt=""/>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <div className='hidden lg:block'>
                            <div className='relative flex flex-col items-center justify-center bg-purple-600 rounded-full w-40 h-40 text-white shadow-lg'>
                                <span className='text-lg'>Precedo</span>
                                <span className='flex items-center gap-2 text-2xl font-bold'>
                                <IconMusic /> 100
                            </span>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col items-start'>
                        <div className='flex items-center justify-end relative'>
                            <img className='absolute -left-36 top-5 hidden lg:block' src={assets.image_29} alt=""/>
                            <RightItem icon={<IconCurrencyDollar />} text="Assets" />
                        </div>
                        <div className='flex items-center justify-end relative'>
                            <img className='absolute -left-34 top-5 hidden lg:block' src={assets.image_30} alt=""/>
                            <RightItem icon={<IconWallet />} text="Timely Payouts" />
                        </div>
                        <div className='flex items-center justify-end relative'>
                            <img className='absolute -left-34 -top-2 hidden lg:block' src={assets.image_31} alt=""/>
                            <RightItem icon={<IconTrendingUp />} text="Asset Growth" />
                        </div>
                        <div className='flex items-center justify-end relative'>
                            <img className='absolute -left-34 -top-20 hidden lg:block' src={assets.image_32} alt=""/>
                            <RightItem icon={<IconBan />} text="Zero Leverage" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Secret;