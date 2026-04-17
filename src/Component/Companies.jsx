import {assets} from "../assets/assets.js";

function Companies() {

    return (
        <>
            <div className='max-w-7xl mx-auto px-5'>
                <hr className='border border-gray-800'/>
            </div>

            <section className='py-10'>
                <div className='max-w-7xl mx-auto'>
                    <div>
                        <p className='text-white text-center font-semibold text-lg'>Trusted by Companies All Over the World</p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-10'>
                        <div className='flex items-center justify-center'>
                            <img className='cursor-pointer' src={assets.image_19} alt=""/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='cursor-pointer' src={assets.image_20} alt=""/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='cursor-pointer' src={assets.image_21} alt=""/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='cursor-pointer' src={assets.image_22} alt=""/>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img className='cursor-pointer' src={assets.image_23} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Companies;
