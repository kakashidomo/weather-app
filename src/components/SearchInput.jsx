const SearchInput = ({ onClick }) => {
    return (

        <>
        
        <input
        type="text"
        placeholder="Search for Places"
        onClick={onClick}
        className="bg-gray-500 m-4 text-white text-center p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        
      />
        </>
      
    );
};

export default SearchInput;


