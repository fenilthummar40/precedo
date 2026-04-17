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

                <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 items-center'>
                    <div className='flex flex-col items-end'>
                        <LeftItem icon={<IconGauge />} text="Risk" />
                        <LeftItem icon={<IconTrophy />} text="Profits" />
                        <LeftItem icon={<IconChartBar />} text="Beats the Market" />
                        <LeftItem icon={<IconCalendar />} text="Days in Profit" />
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
                        <RightItem icon={<IconCurrencyDollar />} text="Assets" />
                        <RightItem icon={<IconWallet />} text="Timely Payouts" />
                        <RightItem icon={<IconTrendingUp />} text="Asset Growth" />
                        <RightItem icon={<IconBan />} text="Zero Leverage" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Secret;