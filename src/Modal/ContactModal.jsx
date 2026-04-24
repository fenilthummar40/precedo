import {IconX} from "@tabler/icons-react";
import {assets} from "../assets/assets.js";

function ContactModal({contact, setContact}) {
    if (!contact) return null;

    const sectionStyle = {
        backgroundImage: `
        url(${assets.work_bg_image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center mx-2">
            <div className="absolute inset-0 bg-black/60" onClick={() => setContact(false)}></div>
            <div className="relative rounded-xl shadow-lg w-full max-w-4xl p-6 z-10" style={sectionStyle}>
                <button onClick={() => setContact(false)}
                        className="absolute top-3 right-3 text-white hover:text-black cursor-pointer">
                    <IconX/>
                </button>
                <h2 className="text-xl font-bold mb-4 text-center text-white">Contact Us</h2>
                <p className="text-sm font-normal mb-4 text-center text-white">By Contact in you agree to
                    our <br/> Terms and Conditions.</p>
                <form className="space-y-4">

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className="flex flex-col">
                            <label className="text-sm text-white mb-1">First Name :</label>
                            <input type="text" placeholder="Enter your first name"
                                   className="px-4 py-2 rounded-lg text-white border border-gray-600 outline-none" required/>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm text-white mb-1">Last Name :</label>
                            <input type="text" placeholder="Enter your last name"
                                   className="px-4 py-2 rounded-lg text-white border border-gray-600 outline-none" required/>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm text-white mb-1">Email :</label>
                            <input type="email" placeholder="Enter your email"
                                   className="px-4 py-2 rounded-lg text-white border border-gray-600 outline-none" required/>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm text-white mb-1">Phone Number :</label>
                            <input type="number" placeholder="Enter your Phone number"
                                   className="px-4 py-2 rounded-lg text-white border border-gray-600 outline-none" required/>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label className="text-sm text-white mb-1">Message :</label>
                        <textarea placeholder="How can i help you?"
                                  className="px-4 py-2 rounded-lg text-white border border-gray-600 outline-none" required name="" id="" cols="30" rows="5"></textarea>
                    </div>

                    <button type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-2 rounded-lg font-medium cursor-pointer mt-2">
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}

export default ContactModal;