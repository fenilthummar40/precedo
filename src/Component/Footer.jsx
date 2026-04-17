import {assets} from "../assets/assets.js";
import {
    IconBrandFacebook, IconBrandGit,
    IconBrandInstagram,
    IconBrandTwitter,
    IconLocation,
    IconMail,
    IconPhoneCall
} from "@tabler/icons-react";

function Footer() {

    return (
        <>
            <section className='pt-10 bg-slate-900'>
                <div className='max-w-7xl mx-auto bg-cover bg-center px-5'
                     style={{backgroundImage: `url(${assets.image_24})`}}>

                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <div>
                            <img className='h-40' src={assets.logo} alt=""/>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div>
                                <span
                                    className='border border-gray-500 flex items-center justify-center p-5 rounded-full'><IconPhoneCall
                                    className='text-white'/></span>
                            </div>
                            <div>
                                <h1 className='text-white font-semibold text-lg'>Our Phone</h1>
                                <p className='text-gray-400 font-normal text-sm mt-1'>(123) 654 - 5643 88</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div>
                                <span
                                    className='border border-gray-500 flex items-center justify-center p-5 rounded-full'><IconMail
                                    className='text-white'/></span>
                            </div>
                            <div>
                                <h1 className='text-white font-semibold text-lg'>Our Email</h1>
                                <p className='text-gray-400 font-normal text-sm mt-1'>example@gmail.com</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-5'>
                            <div>
                                <span
                                    className='border border-gray-500 flex items-center justify-center p-5 rounded-full'><IconLocation
                                    className='text-white'/></span>
                            </div>
                            <div>
                                <h1 className='text-white font-semibold text-lg'>Our Address</h1>
                                <p className='text-gray-400 font-normal text-sm mt-1'>Q4HP+QP New York, USA</p>
                            </div>
                        </div>
                    </div>

                    <hr className='border border-gray-800'/>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-10'>
                        <div>
                            <p className='text-gray-400 font-normal text-sm lg:text-lg line-clamp-2'>Contrary to popular belief, Lorem Ipsum is
                                not <br/> simply random text. It has
                                roots.Conry to <br/> popular belief.</p>

                            <div className='flex items-center gap-5 mt-5'>
                                <span
                                    className='border rounded-full border-gray-600 flex items-center justify-center p-2 text-white hover:bg-gradient-to-r from-yellow-400 to-pink-500 cursor-pointer'><IconBrandTwitter/></span>
                                <span
                                    className='border rounded-full border-gray-600 flex items-center justify-center p-2 text-white hover:bg-gradient-to-r from-yellow-400 to-pink-500 cursor-pointer'><IconBrandFacebook/></span>
                                <span
                                    className='border rounded-full border-gray-600 flex items-center justify-center p-2 text-white hover:bg-gradient-to-r from-yellow-400 to-pink-500 cursor-pointer'><IconBrandInstagram/></span>
                                <span
                                    className='border rounded-full border-gray-600 flex items-center justify-center p-2 text-white hover:bg-gradient-to-r from-yellow-400 to-pink-500 cursor-pointer'><IconBrandGit/></span>
                            </div>
                        </div>

                        <div>
                            <ul className='flex items-center flex-wrap gap-4 md:gap-8'>
                                <li><a
                                    className='text-white font-normal text-sm md:text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                                    href="">Home</a></li>
                                <li><a
                                    className='text-white font-normal text-sm md:text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                                    href="">About Us</a></li>
                                <li><a
                                    className='text-white font-normal text-sm md:text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                                    href="">How it Works</a></li>
                                <li><a
                                    className='text-white font-normal text-sm md:text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                                    href="">Referral Program</a></li>
                                <li><a
                                    className='text-white font-normal text-sm md:text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                                    href="">Help Center</a></li>
                                <li><a
                                    className='text-white font-normal text-sm md:text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                                    href="">Security</a></li>
                                <li><a
                                    className='text-white font-normal text-sm md:text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                                    href="">FAQs</a></li>
                                <li><a
                                    className='text-white font-normal text-sm md:text-lg hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent'
                                    href="">Avoiding Scams</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-5 border border-gray-600 rounded-t-lg p-2 grid grid-cols-1 md:grid-cols-2 '>
                        <div><p className='text-gray-400 font-normal text-sm md:text-lg'>© 2024 Precedo All Rights Reserved by site  </p></div>
                        <div className='flex items-center justify-end gap-5'>
                            <p className='text-gray-400 font-normal text-sm md:text-lg'>Privacy Policy</p>
                            <p className='text-gray-400 font-normal text-sm md:text-lg'>Terms & Conditions</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Footer;
