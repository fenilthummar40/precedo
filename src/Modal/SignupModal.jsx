import {IconBrandGoogle, IconX} from "@tabler/icons-react";
import {assets} from "../assets/assets.js";

function SignupModal({signup, setSignup}) {
    if (!signup) return null;

    const sectionStyle = {
        backgroundImage: `
        url(${assets.work_bg_image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center mx-2">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSignup(false)}></div>
            <div className="relative rounded-xl shadow-lg w-full max-w-lg p-6 z-10" style={sectionStyle}>
                <button onClick={() => setSignup(false)}
                        className="absolute top-3 right-3 text-white hover:text-black cursor-pointer">
                    <IconX/>
                </button>
                <h2 className="text-xl font-bold mb-4 text-center text-white">Sign Up</h2>
                <p className="text-sm font-normal mb-4 text-center text-white">By Signing in you agree to
                    our <br/> Terms and Conditions.</p>
                <form className="space-y-4">
                    <div className="flex flex-col">
                        <label className="text-sm text-white mb-1">User Name :</label>
                        <input type="text" placeholder="Enter your username"
                               className="px-4 py-2 rounded-lg text-white border border-gray-600 outline-none" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-white mb-1">Email :</label>
                        <input type="email" placeholder="Enter your email"
                               className="px-4 py-2 rounded-lg text-white border border-gray-600 outline-none" required />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-sm text-white mb-1">Password :</label>
                        <input type="password" placeholder="Enter your password"
                               className="px-4 py-2 rounded-lg text-white border border-gray-600 outline-none" required />
                    </div>

                    <button type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg font-medium cursor-pointer mt-2">
                        Sign Up
                    </button>

                    <div className='py-5'>
                        <button type='submit'
                                className='text-white border border-gray-600 hover:bg-white/10 flex items-center justify-center w-full py-2 rounded-lg font-medium cursor-pointer'>
                            <span className='flex items-center gap-5'> <IconBrandGoogle className='w-4 h-4'/>  Sign Up with Google</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupModal;