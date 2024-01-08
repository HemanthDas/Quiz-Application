import { Link, Outlet } from "@tanstack/react-router";
const Subject = () => {
  const subjects = [
    { id: 1, name: "General Knowledge" },
    { id: 2, name: "Biology" },
    { id: 3, name: "Physics" },
    { id: 4, name: "Chemistry" },
    { id: 5, name: "History" },
    { id: 6, name: "Sports" },
  ];

  return (
    <section id="subjects">
      <article>
        {subjects.map((subject) => {
          return (
            <Link key={subject.id} className="sub-names" to={subject.name}>
              <h1>{subject.name}</h1>
            </Link>
          );
        })}
      </article>
      <Outlet />
    </section>
  );
};
export default Subject;
