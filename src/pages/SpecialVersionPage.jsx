import { useParams } from "react-router-dom";

const SpecialVersionPage = () => {
  const { name, version } = useParams();
  return (
    <div>
      <div>{name}</div>
      <div>{version}</div>
    </div>
  );
};

export default SpecialVersionPage;
