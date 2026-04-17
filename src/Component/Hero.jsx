import {assets} from "../assets/assets.js";
import {IconVideo} from "@tabler/icons-react";

function Hero() {

    const sectionStyle = {
        backgroundImage: `
        url(${assets.work_bg_image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <>
            <section className='py-10'>
                <div className='max-w-7xl mx-auto px-5'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='flex items-start flex-col justify-center'>
                            <span className='bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent mt-2 font-medium text-lg line-clamp-2'>Increase Your Investing Returns With Precedo AI</span>
                            <h1 className='text-white text-2xl lg:text-5xl font-bold mt-2 line-clamp-3'>Precedo is your AI tool to level the
                                playing field with Wall Street</h1>
                            <p className='text-gray-400 text-sm lg:text-lg mt-2 font-normal line-clamp-4'>Developed by Wall Street veterans and
                                the world’s leading AI engineers to analyze your
                                portfolio weak-points and hand pick stocks tailored to your investment goals that are
                                statistically likely to outperform Wall Street (because they haven’t discovered them
                                yet)</p>
                            <button
                                className='px-5 py-3 bg-gradient-to-r from-yellow-400 to-pink-500 text-white rounded-full mt-5 font-semibold text-lg cursor-pointer'>Make
                                Money Now
                            </button>
                        </div>

                        <div>
                            <div className='relative'>
                                <img className='w-full rounded-lg' src={assets.image_5} alt=""/>
                                <div
                                    className='absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg shadow-xl p-4 flex items-center justify-between gap-5 z-10' style={sectionStyle}>
                                    <div>
                                        <span
                                            className='border-2 border-pink-500 flex items-center justify-center rounded-full p-4'>
                                                <IconVideo className='text-white'/>
                                        </span>
                                    </div>
                                    <div>
                                        <h1 className='text-white'>How It Works</h1>
                                        <p className='text-gray-500'>Play Video</p>
                                    </div>
                                </div>
                            </div>

                            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-4'>
                                <div className='flex items-center flex-col justify-center p-5 shadow-xl rounded-b-lg'>
                                    <h1 className='bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent text-2xl mb-1'>$34M</h1>
                                    <p className='text-gray-500 text-sm line-clamp-1'>Total Invested</p>
                                </div>
                                <div className='flex items-center flex-col justify-center p-5 shadow-xl rounded-b-lg'>
                                    <h1 className='bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent text-2xl mb-1'>6K</h1>
                                    <p className='text-gray-500 text-sm line-clamp-1'>Community Members</p>
                                </div>
                                <div className='flex items-center flex-col justify-center p-5 shadow-xl rounded-b-lg'>
                                    <h1 className='bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent text-2xl mb-1'>$300M</h1>
                                    <p className='text-gray-500 text-sm line-clamp-1'>Trading Volume</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
