import {useState} from "react";
import {IconArrowDown} from "@tabler/icons-react";

function MultiSelectDropdown({label, options}) {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState([]);

    const toggleOption = (option) => {
        setSelected((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    const filteredOptions = options.filter((opt) =>
        opt.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative w-52">
            <button onClick={() => setOpen(!open)}
                    className="w-full border border-gray-600 text-white px-4 py-2 rounded-md flex justify-between items-center cursor-pointer">
                {label}<IconArrowDown className="w-4 h-4"/>
            </button>

            {open && (
                <div
                    className="absolute mt-2 w-full bg-[#020c1b] border border-slate-700 rounded-lg shadow-xl overflow-hidden z-50">
                    <div className="p-2 border-b border-slate-700">
                        <input type="text" placeholder="Search..." value={search}
                               onChange={(e) => setSearch(e.target.value)}
                               className="w-full bg-transparent text-white px-3 py-2 outline-none placeholder-gray-400"/>
                    </div>

                    <div className="max-h-40 overflow-y-auto">
                        {filteredOptions.map((option) => (
                            <label key={option}
                                   className="flex items-center gap-2 px-4 py-2 text-white hover:bg-slate-800 cursor-pointer">
                                <input type="checkbox" checked={selected.includes(option)}
                                       onChange={() => toggleOption(option)} className="accent-blue-500"/>
                                {option}
                            </label>
                        ))}

                        {filteredOptions.length === 0 && (
                            <div className="text-gray-400 px-4 py-2 text-sm">No results found</div>
                        )}
                    </div>

                    <div className="p-2 border-t border-slate-700">
                        <button onClick={() => setOpen(false)}
                                className="w-full bg-slate-700 text-white py-2 rounded-md hover:bg-slate-600 cursor-pointer">Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MultiSelectDropdown;