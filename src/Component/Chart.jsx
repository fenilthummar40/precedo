import {assets} from "../assets/assets.js";
import ApexChart from "./ApexChart.jsx";

function Chart() {

    return (
        <>
            <section className='py-10'>
                <div className='max-w-7xl mx-auto px-5'>
                    <div className='flex items-center justify-between flex-col sm:flex-row gap-5'>
                        <div className='lg:w-2/5'>
                            <div className='relative'>
                                <img className='rounded-lg h-[500px]' src={assets.image_6} alt=""/>
                                <div className='absolute bottom-0 text-center text-white p-5 bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] rounded-b-lg'>
                                    <p className='line-clamp-2'>Over 100 years of financial data analyzed Currently analyzing causes of 1987 financial crash.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full lg:w-3/5 bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] h-full rounded-lg'>
                        <ApexChart/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Chart
