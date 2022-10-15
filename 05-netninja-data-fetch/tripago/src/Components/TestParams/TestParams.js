import { useParams } from "react-router-dom";

const TestParams = () => {
  const { id } = useParams();
  return <>id: {id}</>;
};

export default TestParams;
