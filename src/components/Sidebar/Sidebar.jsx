import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaUsers,
  FaChartBar,
  FaCogs,
  FaChevronDown,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import useDeviceState from "../utils/useDeviceState";

const menuItems = [
  { title: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
  { title: "Audits", icon: <FaFileAlt />, path: "/audits" },
  {
    title: "Master",
    icon: <FaCogs />,
    hasSubmenu: true,
    submenu: [
      { title: "Template Management", path: "/template-management" },
      { title: "Control Management", path: "/control-management" },
      { title: "Application Management", path: "/create" },
      { title: "Client Management", path: "/client-management" },
      { title: "Industry Management", path: "/industry-management" },
    ],
  },
  { title: "User Management", icon: <FaUsers />, path: "/user-management" },
  { title: "Reports", icon: <FaChartBar />, path: "/reports" },
];

const Sidebar = () => {
  const isMobile = useDeviceState();
  console.log(isMobile, "isMobile")
  const [expanded, setExpanded] = useState(true);
  const [openMenus, setOpenMenus] = useState({});

  const toggleSubmenu = (title) => {
    setOpenMenus((prev) => ({ ...prev, [title]: !prev[title] }));
    setExpanded(!isMobile);
  };

  useEffect(() => {
    let el = document.querySelector(".layout");
    if (!expanded && el) {
      el.classList.add("expend-layout");
    } else {
      el.classList.remove("expend-layout");
    }
  }, [expanded]);

  const handleExpend = () => {
    setExpanded(!expanded);
    setOpenMenus({});
  };

  return (
    <aside className={`sidebar ${!expanded ? "expanded" : ""}`}>
      <span className="toggle-btn" onClick={() => handleExpend()}></span>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li
              key={item.title}
              className={item.hasSubmenu ? "master-menu" : ""}
            >
              {item.hasSubmenu ? (
                <div className="link" onClick={() => toggleSubmenu(item.title)}>
                  {item.icon && <span className="icon">{item.icon}</span>}
                  <span className="text">{item.title}</span>
                  <FaChevronDown
                    className={`chevron ${openMenus[item.title] ? "open" : ""}`}
                  />
                </div>
              ) : (
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {item.icon && <span className="icon">{item.icon}</span>}
                  <span className="text">{item.title}</span>
                </NavLink>
              )}
              {item.hasSubmenu && openMenus[item.title] && (
                <ul className="submenu">
                  {item.submenu.map((sub) => (
                    <li key={sub.title}>
                      <NavLink
                        to={sub.path}
                        className={({ isActive }) => (isActive ? "active" : "")}
                      >
                        {sub.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
