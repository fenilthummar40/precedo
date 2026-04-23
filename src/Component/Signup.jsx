import {useState} from "react";
import SignupModal from "../Modal/SignupModal.jsx";

function Signup() {
    const [signup, setSignup] = useState(false);

    return (
        <>
            <div>
                <button onClick={() => setSignup(true)}
                        className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-5 py-2 rounded-full md:text-xs lg:text-lg cursor-pointer">
                    Sign Up
                </button>
            </div>
            <SignupModal signup={signup} setSignup={setSignup}/>
        </>
    );
}

export default Signup;