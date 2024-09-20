import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchPackages } from "../redux/npmSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      dispatch(searchPackages(searchQuery));
    }
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center space-x-4 p-4 bg-violet-100 rounded-lg shadow-md">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown} // Search on Enter key press
        className="w-full max-w-md p-3 border border-violet-300 rounded-lg focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500 placeholder-violet-400"
        placeholder="Search NPM packages..."
      />
      <button
        onClick={handleSearch}
        className="bg-violet-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-violet-700 focus:ring-2 focus:ring-violet-300 transition-all"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
