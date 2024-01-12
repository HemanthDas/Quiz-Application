import { useParams } from "@tanstack/react-router";

const Result = () => {
  const route = useParams({ from: undefined, strict: true });
  return (
    <div>
      <h1>{route.id}</h1>
    </div>
  );
};
export default Result;
