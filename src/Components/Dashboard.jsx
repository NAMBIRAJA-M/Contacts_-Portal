import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Avatar, Badge } from "@mui/material";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Overview from "./Overview";

function Dashboard() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const searchInputRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationsCount, setNotificationsCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleGlobalKeydown(e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleGlobalKeydown);
    return () => window.removeEventListener("keydown", handleGlobalKeydown);
  }, []);

  function handleSearchKeyDown(e) {
    if (e.key === "Enter") {
      // For now just navigate to contacts with query as example
      navigate("/contacts", { state: { q: searchQuery } });
    }
  }

  function handleLogout() {
    sessionStorage.setItem("isAuthenticated", "false");
    navigate("/");
  }

  function goToProfile() {
    navigate("/soon");
  }

  function goToSettings() {
    navigate("/soon");
  }
  return (
    <>
      <div className="dashboard-container">
        <div className="centre-section">
          <div className="navbar-section">
            <div className="nav-left">
              <p className="dash-heading">DashBoard</p>
            </div> 

           {/*  <div className="nav-center">
              <input
                ref={searchInputRef}
                className="nav-search-input"
                type="text"
                placeholder="Search (Ctrl+K)"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchKeyDown}
              />
            </div> */}
           

            <div className="nav-right">
              <button className="icon-btn" aria-label="Notifications" onClick={() => setNotificationsCount(0)}>
                <Badge color="error" badgeContent={notificationsCount} overlap="circular">
                  <NotificationsNoneIcon />
                </Badge>
              </button>

              <div className="vline"></div>

              <div className="profile" ref={profileRef}>
                <button
                  className="profile-trigger"
                  onClick={() => setIsProfileOpen((p) => !p)}
                  aria-haspopup="menu"
                  aria-expanded={isProfileOpen}
                >
                  <Avatar alt="avatar" src="/avatar.png" sx={{ width: 30, height: 30 }} className="avatar" />
                  <span className="profile-name">You</span>
                  <ArrowDropDownIcon className={`caret ${isProfileOpen ? "open" : ""}`} />
                </button>
                {isProfileOpen && (
                  <div className="profile-menu" role="menu">
                    <button className="profile-item" role="menuitem" onClick={goToProfile}>View Profile</button>
                    <button className="profile-item" role="menuitem" onClick={goToSettings}>Settings</button>
                    <button className="profile-item danger" role="menuitem" onClick={handleLogout}>Logout</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="main-section">
            <div className="welcome-card">
              <div className="welcome-content">
                <h2 className="welcome-title">Welcome Back, Raja 🙋‍♂️</h2>
                <p className="welcome-description">
                  Manage your work, track your progress, and access essential services—all in one place.
                </p>
              </div>
            </div>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <button className="contacts-add-btn" onClick={() => navigate("/contacts")}>Add Contact</button>
              <button className="contacts-add-btn" onClick={() => navigate("/soon")}>Import CSV</button>
              <button className="contacts-add-btn" onClick={() => navigate("/soon")}>View Reports</button>
            </div>
            <Overview />
            {/* Attendance / Clock In-Out Card */}
            <div className="attendance-card">
              <div className="attendance-header">
                <div>
                  <h3 className="attendance-title">Clock In & Out Time</h3>
                  <p className="attendance-subtitle">Easily record your work timings and track your attendance seamlessly.</p>
                </div>
                <div className="attendance-actions">
                  <button className="clockout-btn">Clock Out</button>
                  <div className="attendance-date">
                    <span className="calendar-emoji" role="img" aria-label="calendar">🗓️</span>
                    <span className="date-text">{new Date().toLocaleDateString(undefined, { month: 'long', day: '2-digit', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>

              <div className="attendance-shift">
                <div className="shift-icon" role="img" aria-label="clock">🕒</div>
                <p className="shift-text">Shift Time - 9:30 AM – 6:30 PM</p>
              </div>

              <div className="attendance-timeline">
                <div className="timeline-left">
                  <span className="timeline-label">Clock - in</span>
                  <span className="timeline-time">9:30 AM</span>
                </div>
                <div className="timeline-bar-wrap">
                  <span className="timeline-badge late">Late</span>
                  <div className="timeline-bar">
                    <div className="timeline-progress working" style={{ width: "60%",padding:"0.5rem 2rem" }}>Working Time</div>
                    <div className="timeline-remaining"></div>
                  </div>
                </div>
                <div className="timeline-right">
                  <span className="timeline-label">Clock - out</span>
                  <span className="timeline-time">6:30 PM</span>
                </div>
              </div>

              <div className="attendance-stats">
                <div className="stat">
                  <span className="stat-label">Clock - in</span>
                  <span className="stat-value positive">10:30 AM</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Clock - out</span>
                  <span className="stat-value">-</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Late</span>
                  <span className="stat-value negative">1 Hour</span>
                </div>
                <div className="stat">
                  <span className="stat-label">Total Duration</span>
                  <span className="stat-value">-</span>
                </div>
              </div>
            </div>
            {/* <div className="space">
              
            </div> */}
          </div>
        </div>
      </div>
      {/* <h1>Dashboard</h1> */}
    </>
  );
}

export default Dashboard;
