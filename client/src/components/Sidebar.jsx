import { ChevronLast, ChevronFirst } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import logo from "../assets/threejs.png";
const SidebarContext = createContext();
export default function Sidebar({ children }) {
  const [expanded, setExpanded] = useState(
    window.innerWidth < 1024 ? false : true
  );
  return (
    <aside className="h-screen w-fit fixed z-10">
      <nav className="h-full flex flex-col bg-primary border-tertiary border-r shadow-tertiary shadow-xl">
        <div className="p-4 pb-4 flex justify-between items-center">
          <img
            src={logo}
            className={`overflow-hidden transition-all ${
              expanded ? "w-10" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg text-tertiary"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>
        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3 side-bars">{children}</ul>
        </SidebarContext.Provider>
        <div className="border-t border-tertiary flex p-3">
          <span className="rounded-full p-2 cursor-pointer sm:text-2xl text-tertiary">
            <FaUser />
          </span>
          <div
            className={`
               flex justify-between items-center
               overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
           `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">user</h4>
              <span className="text-xs text-gray-600">user@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
}
export function SidebarItem({ icon, text, active, alert, onClick }) {
  const { expanded } = useContext(SidebarContext);
  return (
    <li
      className={`
         relative flex items-center justify-center py-3 px-3 my-2
         font-medium rounded-md cursor-pointer
         transition-colors group
         ${
           active
             ? "bg-secondary text-white"
             : "hover:bg-secondary/55 hover:text-bluecs text-blue-950"
         }
     `}
      onClick={onClick}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}
      {!expanded && (
        <div
          className={`
           absolute left-full rounded-md px-2 py-1 ml-6 
           bg-orange-300 text-bluecs text-sm
           invisible opacity-20 -translate-x-3 transition-all
           group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
       `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
