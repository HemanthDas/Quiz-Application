import { useParams } from "@tanstack/react-router";

const PreTest = () => {
  const route = useParams({ from: undefined, strict: true });
  console.log(route);
  return <div>{route.id}</div>;
};

export default PreTest;
