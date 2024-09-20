import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchPackageVersion } from "../redux/npmSlice";
import VersionDetail from "../components/VersionDetail";

const VersionDetailPage = () => {
  const { name, version } = useParams();
  const dispatch = useDispatch();
  const { versionDetails } = useSelector((state) => state.npm);

  useEffect(() => {
    dispatch(fetchPackageVersion({ packageName: name, version }));
  }, [dispatch, name, version]);

  return (
    <div>
      {versionDetails ? (
        <VersionDetail versionData={versionDetails} />
      ) : (
        <p>Loading version details...</p>
      )}
    </div>
  );
};

export default VersionDetailPage;
