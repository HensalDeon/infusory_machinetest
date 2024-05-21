import SidebarContainer from "../components/SidebarContainer";
import Dashboard from "./Dashboard";
import Home from "./Home";

const Main = ({ location }) => {
  return (
    <>
      <SidebarContainer />
      <div className="ml-[73px] bg-primary">
        {location === "home" ? <Home /> : <Dashboard />}
      </div>
    </>
  );
};

export default Main;
