import { useSelector } from "react-redux";
import PackageCard from "../components/PackageCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const { searchResults, loading } = useSelector((state) => state.npm);

  return (
    <div className="p-6 bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
        NPM Package Search
      </h1>
      <SearchBar />

      {loading && (
        <div className="flex justify-center mt-4">
          <p className="text-lg text-gray-600">Loading...</p>
        </div>
      )}

      {searchResults.length === 0 && !loading && (
        <div className="flex justify-center mt-6">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md mx-auto border border-blue-400">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              No Packages Found
            </h2>
            <p className="text-gray-700 mb-4">
              We couldn't find any packages matching your search.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              Please check the spelling or try searching for a different
              package.
            </p>
          </div>
        </div>
      )}

      <div
        className={`grid ${
          loading || searchResults.length === 0
            ? "grid-cols-1"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        } gap-4 mt-4`}
      >
        {searchResults.map((pkg) => (
          <PackageCard key={pkg.package.name} {...pkg.package} />
        ))}
      </div>
    </div>
  );
};

export default Home;
