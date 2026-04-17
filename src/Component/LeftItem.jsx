function LeftItem({icon, text}) {

    return (
        <>
            <div className="relative flex items-center justify-center md:justify-end w-full mb-8">
                <div className="absolute right-0 top-1/2 w-24 h-[2px] bg-purple-500 translate-x-full hidden md:block"></div>
                <div
                    className="absolute right-0 top-1/2 w-3 h-3 bg-pink-500 rounded-full translate-x-[150%] -translate-y-1/2 hidden md:block"></div>
                <div
                    className="z-10 flex items-center gap-3 bg-gradient-to-r from-[#0f172a] to-[#1e1b4b] px-6 py-3 rounded-full text-white">
                    <span className="text-pink-500">{icon}</span>
                    {text}
                </div>
                {/*<span className='text-black text-xs absolute top-0 z-10 bg-green-200 rounded-full p-1'>+30</span>*/}
            </div>
        </>
    );
}

export default LeftItem;
