import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import SettingsApplicationsOutlinedIcon from "@mui/icons-material/SettingsApplicationsOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../index.css";

function Sidebar() {
  const Navigate = useNavigate();
  const [active, setActive] = useState(null);
  const [collapsed, setCollapsed] = useState(false);
  const sidebar = [
    { icon: <SpaceDashboardIcon />, label: "Dashboard" },
    { icon: <PeopleOutlineOutlinedIcon />, label: "Contacts" },
    { icon: <MenuBookOutlinedIcon />, label: "Management" },
    { icon: <PeopleOutlineOutlinedIcon />, label: "Customer Management" },
    { icon: <AssessmentOutlinedIcon />, label: "Reports and Analytics" },
    { icon: <SettingsApplicationsOutlinedIcon />, label: "Settings" },
    {
      icon: <AdminPanelSettingsOutlinedIcon />,
      label: "Authentication and Security",
    },
  ];

  function handleLogout() {
    sessionStorage.setItem("isAuthenticated", "false");
    Navigate("/");
    /*   alert("sucessfully logged out") */
  }
  function toggleCollapse() {
    setCollapsed((prev) => !prev);
  }
  function handleClick(index) {
    setActive(index);

    if (index === 0) {
      Navigate("dashboard");
    }
    if (index === 1) {
      Navigate("contacts");
    }
    if (index > 1) {
      Navigate("soon");
    }
  }

  return (
    <div className={`sidebar-sections ${collapsed ? "collapsed" : ""}`}>
      <button
        className="sidebar-toggle"
        onClick={toggleCollapse}
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      >
        {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
      </button>
      <div className="logos-section">
        <img
          className="logodash"
          src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
          alt="logo"
        />
        <p className="logotxtdash">Contactly</p>
      </div>
      <div>
        <ul className="menus-section">
          {sidebar.map((item, index) => (
            <li
              key={index}
              className={`sidebar-item ${active === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {item.icon} <span className="menu-label">{item.label}</span>
            </li>
          ))}
        </ul>
        <div className="logout-container">
          <p className="logoutfunc" onClick={() => handleLogout()}>
            {" "}
            <LogoutOutlinedIcon />
            <span className="logout-label">Logout</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
