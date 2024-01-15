import { useParams, useSearch } from "@tanstack/react-router";
import hasher from "../components/hasher";

const Result = () => {
  const route = useParams({ from: undefined, strict: true });
  const search = useSearch({ from: undefined, strict: true });
  const result = hasher(search.result, false);
  return (
    <div id="result">
      <h1>{route.id}</h1>
      <h1>{result}</h1>
    </div>
  );
};
export default Result;
