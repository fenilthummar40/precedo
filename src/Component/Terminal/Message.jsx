import {assets} from "../../assets/assets.js";
import {IconSend} from "@tabler/icons-react";
import {useState} from "react";

function Message({text1, text2}) {
    const [message, setMessage] = useState("");


    return (
        <>
            <div className="bg-slate-700 p-4 m-5 rounded-2xl shadow-lg flex items-center gap-4">
                <img src={assets.image_6} alt="avatar" className="w-40 h-40 rounded-lg object-cover"/>
                <textarea placeholder="Message Precedo" value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="flex-1 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none text-lg"
                          name="" id="" cols="30" rows="5">
                            </textarea>
                <button
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition cursor-pointer">Send<IconSend
                    className='w-4 h-4'/>
                </button>
            </div>
        </>
    );
}

export default Message;
