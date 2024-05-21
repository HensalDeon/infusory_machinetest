import { Briefcase, UserCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar, { SidebarItem } from "./Sidebar";
const SidebarContainer = () => {
  const navigate = useNavigate();
  const [activeBar, setactiveBar] = useState("Jobs");
  const handleItemClick = (item, url) => {
    setactiveBar(item);
    navigate(url);
  };
  useEffect(() => {
    const url = location.pathname;
    setactiveBar(url == "/dashboard" ? "Dashboard" : "Models");
  }, [location]);
  return (
    <>
      <Sidebar>
        <SidebarItem
          icon={<Briefcase />}
          text={"Models"}
          active={activeBar === "Models"}
          onClick={() => handleItemClick("Models", "/")}
        />
        <SidebarItem
          icon={<UserCircle />}
          text={`Dashboard`}
          active={activeBar == "Dashboard"}
          onClick={() => handleItemClick("Dashboard", "/dashboard")}
        />
      </Sidebar>
    </>
  );
};
export default SidebarContainer;
