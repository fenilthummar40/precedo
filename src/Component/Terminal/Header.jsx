import {IconMoon, IconSearch} from "@tabler/icons-react";

function Header() {

    return (
        <>
            <header>
                <div className='flex items-center justify-between p-3 bg-slate-700'>
                    <div>
                        <h1 className='text-white font-medium text-xs sm:text-lg '>Good Afternoon Austin ☀️️</h1>
                    </div>
                    <div className='flex items-center gap-5'>
                        <span className='p-2 bg-white/10 rounded-full text-white cursor-pointer'><IconSearch className='w-4 h-4'/></span>
                        <span className='p-2 bg-white/10 rounded-full text-white cursor-pointer'><IconMoon className='w-4 h-4'/></span>
                        <span className='p-2 bg-white/10 rounded-full text-white cursor-pointer text-sm'>RD</span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
