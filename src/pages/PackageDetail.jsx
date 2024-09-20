import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPackageDetails } from "../redux/npmSlice";

const PackageDetail = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const { packageDetails, loading, error } = useSelector((state) => state.npm);

  useEffect(() => {
    dispatch(fetchPackageDetails(name));
  }, [dispatch, name]);

  return (
    <div className="p-8 bg-gradient-to-r from-violet-200 to-indigo-200 min-h-screen flex flex-col items-center">
      {loading ? (
        <div className="flex justify-center mt-4">
          <p className="text-lg text-gray-600">Loading package details...</p>
        </div>
      ) : error ? (
        <div className="text-lg text-red-600">
          <p>
            Failed to load package details. Please try a different package name.
          </p>
        </div>
      ) : packageDetails ? (
        <div className="max-w-4xl w-full bg-white p-8 rounded-2xl shadow-xl">
          <h1 className="text-4xl font-extrabold text-violet-700 mb-4 text-center">
            {packageDetails.name}
          </h1>
          <p className="text-gray-600 text-lg mb-8 text-center italic">
            {packageDetails.description}
          </p>

          <div className="bg-gray-100 p-6 rounded-xl shadow-inner">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-violet-400 pb-2">
              Available Versions
            </h2>
            <ul className="space-y-6">
              {Object.keys(packageDetails.versions)
                .reverse()
                .map((version) => (
                  <li
                    key={version}
                    className="border-b border-gray-300 pb-2 last:border-none"
                  >
                    <a
                      href={`/package/${packageDetails.name}/${version}`}
                      className="text-lg text-violet-600 font-medium hover:text-violet-800"
                    >
                      {version} - View Details
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-lg text-gray-600">Package details not available.</p>
      )}
    </div>
  );
};

export default PackageDetail;
