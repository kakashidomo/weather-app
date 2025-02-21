import { useState } from "react";
import cities from "../../static_Json/cities.json"

const SearchSection = ({ isOpen, onClose }) => {
    const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
    const [showFullList, setShowFullList] = useState(false); // Estado para mostrar la lista completa

    const filteredOptions = cities.filter((city) => {
        if (searchTerm.length > 2) {
            return city.name.toLowerCase().startsWith(searchTerm.toLowerCase())
        }
    });

    if (!isOpen) return null;

    return (
        <div className="z-10 fixed inset-0 bg-gray-900 flex justify-center items-center">
            <div className="bg-slate-900 rounded-lg shadow-lg w-full h-screen p-6 relative">
                {/* Botón para cerrar la sección (X) */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white hover:text-gray-700"
                >
                    ✕
                </button>

                <div className="flex w-3/4 place-self-center ">
                    {/* Input de búsqueda */}
                    <input
                        type="text"
                        placeholder="Buscar..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="text-white w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Lista de opciones */}
                <ul className="max-h-48 text-white">
                    {(showFullList ? cities : filteredOptions).map((option, index) => (
                        <li key={index} className="p-2 hover:bg-gray-500 rounded-lg">
                            {option.name} {option.country_code}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SearchSection;


/* 


 <button
 onClick={() => setShowFullList(!showFullList)}
 className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
>
 {showFullList ? "Ocultar lista" : "Mostrar lista completa"}
</button>
*/