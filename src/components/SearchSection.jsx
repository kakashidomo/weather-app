import { useState } from "react";
import cities from "../../static_Json/cities.json"

const SearchSection = ({ isOpen, onClose, setCity }) => {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [showFullList, setShowFullList] = useState(false); 

    const filteredOptions = cities.filter((city) => {
        if (searchTerm.length > 2) {
            return city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        }
        return false;
    });

    if (!isOpen) return null;

    return (
        <div className="z-10 fixed inset-0 bg-gray-900 flex justify-center items-center">
            <div className="bg-slate-900 rounded-lg shadow-lg w-full h-screen p-6 relative">
               
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white hover:text-gray-700"
                >
                    ✕
                </button>

                <div className="flex w-3/4 place-self-center ">
                    
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="text-white w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                
                <ul className="max-h-48 text-white">
                    {(showFullList ? cities : filteredOptions).map((option, index) => (
                        <li key={index} className="p-2 hover:bg-gray-500 rounded-lg"
                        onClick={() => {
                            setCity(option.name); 
                            onClose(); 
                          }}
                        >
                          {option.name} {option.country_code}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchSection;