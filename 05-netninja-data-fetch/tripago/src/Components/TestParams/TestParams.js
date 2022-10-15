import { useLocation } from "react-router-dom";

const TestParams = () => {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const name = queryParams.get("name");

  return <>name: {name}</>;
};

export default TestParams;
