import React from "react";

const Admin = () => {
  React.useEffect(() => {
    fetch("http://localhost:3000/admin/subject", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject: "Maths" }),
    });
  }, []);
  return (
    <div>
      <button>Add Subject</button>

      <button>Add Topic</button>
    </div>
  );
};

export default Admin;
