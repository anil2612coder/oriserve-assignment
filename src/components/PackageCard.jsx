import { Link } from "react-router-dom";

const PackageCard = ({ name, description, version }) => (
  <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl hover:border-violet-500">
    <h2 className="font-semibold text-xl text-violet-600">{name}</h2>
    <p className="text-gray-700 mt-2 mb-4 line-clamp-3">{description}</p>

    <Link
      to={`/package/${name}`}
      className="inline-block bg-violet-500 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-violet-600 transition-all"
    >
      View Details
    </Link>

    <div className="mt-4">
      <p className="text-sm text-gray-500">Latest Version:</p>
      <span className="text-gray-900 text-base font-medium">{version}</span>
    </div>
  </div>
);

export default PackageCard;
