import React from "react";
import { Link } from "@tanstack/react-router";

import Cookies from "js-cookie";
const Subject = () => {
  const user = Cookies.get("user");
  const subjects = [
    { id: 1, name: "G.K" },
    { id: 2, name: "Biology" },
    { id: 3, name: "Physics" },
    { id: 4, name: "Chemistry" },
    { id: 5, name: "History" },
    { id: 6, name: "Sports" },
  ];

  return (
    <section id="subjects">
      <h1 style={{ display: "block" }}>Pick a Subject from the below</h1>
      <article>
        {subjects.map((subject) => {
          return (
            <React.Fragment key={subject.id}>
              {user ? (
                <Link className="sub-names" to={"/exam/" + subject.name}>
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
        })}
      </article>
    </section>
  );
};

export default Subject;
