import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPackageVersion } from "../redux/npmSlice";
import VersionDetail from "../components/VersionDetail";

const VersionDetailPage = () => {
  const { name, version } = useParams();
  console.log(name, version);
  const dispatch = useDispatch();
  const { versionDetails, loading, error } = useSelector((state) => state.npm);

  useEffect(() => {
    dispatch(fetchPackageVersion({ packageName: name, version }));
  }, [dispatch, name, version]);

  return (
    <div className="p-8">
      {loading && (
        <p className="text-lg text-gray-600">Loading version details...</p>
      )}
      {error && (
        <p className="text-lg text-red-600">
          Failed to load version details. Please try again.
        </p>
      )}
      {!loading && !error && versionDetails ? (
        <VersionDetail versionData={versionDetails} />
      ) : (
        !loading &&
        !error && (
          <p className="text-lg text-gray-600">
            Version details not available.
          </p>
        )
      )}
    </div>
  );
};

export default VersionDetailPage;
