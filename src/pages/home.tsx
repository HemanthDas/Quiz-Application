import { Outlet } from "@tanstack/react-router";

const Home = () => {
  return (
    <div id="home">
      This will be your landing page
      <div style={{ opacity: 0 }}>
        <Outlet />
      </div>
    </div>
  );
};
export default Home;
