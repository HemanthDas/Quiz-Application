import React, { useEffect } from "react";
import { Link } from "@tanstack/react-router";

import Cookies from "js-cookie";
const Topic = () => {
  const user = Cookies.get("user");
  const [subjects, setSubjects] = React.useState<{ name: string }[]>([]);
  const [loading, setLoading] = React.useState(true);
  // const [error, setError] = React.useState(false);
  useEffect(() => {
    const getSubjects = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/gettopics");

        if (!response.ok) {
          throw new Error("Server is not responding");
        }

        const data = await response.json();
        setSubjects(data);
        setLoading(false);
      } catch (error) {
        alert((error as Error).message);
        setSubjects([]);
        setLoading(false);
        // setError(true);
      }
    };

    getSubjects();
  }, []);

  return (
    <section id="subjects">
      <h1 style={{ display: "block" }}>Pick a Topic from the below</h1>
      <article>
        {loading ? (
          <>Wait while we are fetching data...</>
        ) : (
          subjects.map((subject) => {
            return (
              <React.Fragment key={subject.name}>
                {user ? (
                  <Link
                    className="sub-names"
                    to={"/exam/" + subject.name}
                    search={{ type: "topic" }}
                  >
                    <h1>{subject.name}</h1>
                  </Link>
                ) : (
                  <button
                    className="sub-names"
                    onClick={() => {
                      alert("Please Login to continue");
                    }}
                  >
                    <h1>{subject.name}</h1>
                  </button>
                )}
              </React.Fragment>
            );
          })
        )}
      </article>
    </section>
  );
};

export default Topic;
